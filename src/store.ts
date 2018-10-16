import { createStore, combineReducers } from 'redux';
import { counter, CounterActions, CounterState } from './counter';
import { nodeEnv } from './env';

export default createStore(
  combineReducers({
    counter,
  }),
  nodeEnv === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export type State = {
  counter: CounterState;
};

export type Action = CounterActions;
