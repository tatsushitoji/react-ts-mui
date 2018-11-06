import { ActionCreator } from 'redux';
import { TAction } from '../../types';

export const ADD_TODO = 'todo/add_todo';
export const TOGGLE_TODO = 'todo/toggle_todo';

export const addTodo = (text: string) => ({
  type: ADD_TODO as typeof ADD_TODO,
  payload: {
    text,
  },
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO as typeof TOGGLE_TODO,
  payload: {
    id,
  },
});

export const asyncAddTodo: ActionCreator<TAction<void>> = text => dispatch => {
  setTimeout(() => {
    dispatch(addTodo(text));
  }, 1000);
};

// export const anotherTodo: ThunkResult<void> = dispatch => {
//   setTimeout(() => {
//     dispatch(addTodo('init'));
//   }, 1000);
// };

export type Actions =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>;
