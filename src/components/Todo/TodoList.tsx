import * as React from 'react';
import List from '@material-ui/core/List';
import { Props } from '.';
import { TodoListItem } from './TodoListItem';
// tslint:disable-next-line
import styled from '../../theme';

import { Todo } from '../../modules/todo';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
