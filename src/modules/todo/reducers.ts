import cuid from 'cuid';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, Actions, State } from '.';

const initialState: State = {
  todos: [],
};

export const reducer = (
  state: State = initialState,
  action: Actions,
): State => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: cuid(),
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            todo.id === action.payload.id
              ? { ...todo, completed: !todo.completed }
              : todo,
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};
