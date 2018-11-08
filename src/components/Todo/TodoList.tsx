import * as React from 'react';
import styled from 'react-emotion';
import List from '@material-ui/core/List';
import { Props } from '.';
import { Todo } from '../../modules/todo';
import { TodoListItem } from './TodoListItem';
import { Omit } from '../../types';

type ListProps = Omit<Props, 'add' | 'asyncAdd'>;

const StyledList = styled(List)`
  && {
    margin: 20px;
  }
`;

export const TodoList: React.SFC<ListProps> = ({ todos, toggle }) => (
  <StyledList>
    {todos.map((item: Todo) => (
      <TodoListItem
        id={item.id}
        key={item.id}
        text={item.text}
        completed={item.completed}
        toggle={toggle}
      />
    ))}
  </StyledList>
);
