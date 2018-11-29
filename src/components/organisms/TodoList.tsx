import * as React from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import List, { ListProps } from '@material-ui/core/List';
import { ITodo } from '../../modules/todo';
import { TodoListItem } from '../molecules';

const StyledList = styled(List as React.SFC<ListProps>)`
  padding: ${theme.spacing.unit * 4}px;
`;

interface Props {
  todos: ITodo[];
  toggleTodo: (_: string) => (_: React.SyntheticEvent) => void;
  deleteTodo: (_: string) => (_: React.SyntheticEvent) => void;
}

export const TodoList: React.SFC<Props> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => (
  <StyledList>
    {todos.map((item: ITodo) => (
      <TodoListItem
        id={item.id}
        key={item.id}
        text={item.text}
        completed={item.completed}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </StyledList>
);
