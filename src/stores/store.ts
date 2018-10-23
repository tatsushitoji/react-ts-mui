import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './reducers';
import { nodeEnv } from '../env';
import { State as CounterState } from '../modules/counter/reducers';
import { rootEpic } from './epics';

export interface State {
  counter: CounterState;
}

const epicMiddleware = createEpicMiddleware();

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    nodeEnv === 'development' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(epicMiddleware),
  );
  epicMiddleware.run(rootEpic);
  return store;
};
