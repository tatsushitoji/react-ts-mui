import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { reducer as counterReducer } from '../modules/counter';
import { reducer as todoReducer } from '../modules/todo';

export const rootReducer = (history: History) =>
  combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    router: connectRouter(history),
  });
