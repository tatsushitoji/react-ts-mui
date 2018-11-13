import * as React from 'react';
import { PaperContainer } from '../../atoms/PaperContainer';
import { TodoList } from '../../organisms/TodoList';
import { TodoForm } from '../../organisms/TodoForm';
import { ITodo } from '../../../modules/todo';

export interface Props {
  todos: ITodo[];
  add: (_: string) => void;
  asyncAdd: (_: string) => void;
  toggle: (_: React.ChangeEvent) => void;
}

export const TodoComponent: React.SFC<Props> = ({
  todos,
  add,
  asyncAdd,
  toggle,
}) => (
  <PaperContainer>
    {todos.length > 0 && <TodoList todos={todos} toggle={toggle} />}
    <TodoForm add={add} asyncAdd={asyncAdd} />
  </PaperContainer>
);
