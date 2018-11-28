import { ActionCreator } from 'redux';
import { addTodo } from '.';
import { TAction } from '../shared';

export const asyncAddTodo: ActionCreator<TAction<void>> = (
  text: string,
) => dispatch => {
  setTimeout(() => {
    dispatch(addTodo(text));
  }, 1000);
};
