import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { nodeEnv } from './env';
import { State as CounterState } from './modules/counter/module'; // TODO: export interface/type

export default createStore(
  rootReducer,
  nodeEnv === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export interface State {
  counter: CounterState;
}
