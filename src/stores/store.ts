import { createStore, applyMiddleware, compose, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './reducers';
import { nodeEnv } from '../env';
import { State as CounterState } from '../modules/counter/reducers';
import { rootEpic } from './epics';

export interface State {
  counter: CounterState;
}

const epicMiddleware = createEpicMiddleware();

const createEnhancer = () => {
  const composeEnhancers =
    nodeEnv !== 'production' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  return composeEnhancers(applyMiddleware(epicMiddleware));
};

export const configureStore = (preloadedState: Object = {}) => {
  const enhancer = createEnhancer();
  const store: Store = createStore(rootReducer, preloadedState, enhancer);
  epicMiddleware.run(rootEpic);
  return store;
};
