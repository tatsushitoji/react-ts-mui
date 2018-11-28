export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface State {
  todos: ITodo[];
}
