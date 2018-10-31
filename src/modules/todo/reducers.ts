import { ADD_TODO, TOGGLE_TODO, Actions } from './actions';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface State {
  todos: Todo[];
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
            id: state.todos.length,
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
