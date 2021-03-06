export const ADD_TODO = 'todo/add_todo';
export const TOGGLE_TODO = 'todo/toggle_todo';
export const DELETE_TODO = 'todo/delete_todo';

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

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO as typeof DELETE_TODO,
  payload: {
    id,
  },
});

export type Actions =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof deleteTodo>;
