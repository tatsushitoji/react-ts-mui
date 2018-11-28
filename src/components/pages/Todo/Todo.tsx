import * as React from 'react';
import { compose } from 'recompose';
import { head } from '../../../components/hocs/head';
import { PaperContainer } from '../../atoms/PaperContainer';
import { TodoList, TodoForm } from '../../organisms';
import { ITodo } from '../../../modules/todo';

export interface Props {
  todos: ITodo[];
  addTodo: (_: string) => void;
  asyncAddTodo: (_: string) => void;
  toggleTodo: (_: string) => (_: React.SyntheticEvent) => void;
  deleteTodo: (_: string) => (_: React.SyntheticEvent) => void;
}

const TodoPage: React.SFC<Props> = ({
  todos,
  addTodo,
  asyncAddTodo,
  toggleTodo,
  deleteTodo,
}) => (
  <PaperContainer>
    {todos.length > 0 && (
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    )}
    <TodoForm addTodo={addTodo} asyncAddTodo={asyncAddTodo} />
  </PaperContainer>
);

export const Todo = compose<Props, Props>(head('Counter'))(TodoPage);
