import { Action } from 'redux';

export const ADD_TODO = 'todo/add_todo';
export const TOGGLE_TODO = 'todo/toggle_todo';

export interface AddTodo extends Action<typeof ADD_TODO> {
  payload: {
    text: string;
  };
}

export interface ToggleTodo extends Action<typeof TOGGLE_TODO> {
  payload: {
    id: number;
  };
}

export type Actions = AddTodo | ToggleTodo;

export const addTodo = (text: string): AddTodo => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const toggleTodo = (id: number): ToggleTodo => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});
