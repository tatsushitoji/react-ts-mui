import cuid from 'cuid';
import { ADD_TODO, TOGGLE_TODO, Actions } from '.';

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface State {
  todos: ITodo[];
}

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
    default:
      return state;
  }
};
