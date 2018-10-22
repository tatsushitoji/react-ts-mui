import { combineReducers } from 'redux';
import { reducer as counterReducer } from '../modules/counter';

export const rootReducer = combineReducers({
  counter: counterReducer,
});
