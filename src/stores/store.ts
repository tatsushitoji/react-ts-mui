import { createStore, applyMiddleware, compose, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware, RouterState } from 'connected-react-router';
import { rootReducer } from './reducers';
import { nodeEnv } from '../env';
import { State as CounterState } from '../modules/counter/reducers';
import { State as todoState } from '../modules/todo/reducers';
import { rootEpic } from './epics';
import { RootActions } from './actions';

export interface RootState {
  counter: CounterState;
  todo: todoState;
  router: RouterState;
}

const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();

const createEnhancer = () => {
  const composeEnhancers =
    nodeEnv !== 'production' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  return composeEnhancers(
    applyMiddleware(
      epicMiddleware,
      reduxThunk as ThunkMiddleware<RootState, RootActions>,
      routerMiddleware(history),
    ),
  );
};

export const configureStore = (preloadedState: Object = {}) => {
  const enhancer = createEnhancer();
  const store: Store = createStore(
    rootReducer(history),
    preloadedState,
    enhancer,
  );
  epicMiddleware.run(rootEpic);
  return store;
};
