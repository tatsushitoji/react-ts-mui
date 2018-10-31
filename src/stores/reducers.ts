import { combineReducers } from 'redux';
import { reducer as counterReducer } from '../modules/counter';
import { reducer as todoReducer } from '../modules/todo';

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
