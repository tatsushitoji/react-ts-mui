import * as React from 'react';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import { ITodo } from '../../modules/todo';
import { TodoListItem } from '../molecules';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing.unit * 4,
    },
  });

interface Props extends WithStyles<typeof styles> {
  todos: ITodo[];
  toggleTodo: (_: string) => (_: React.SyntheticEvent) => void;
  deleteTodo: (_: string) => (_: React.SyntheticEvent) => void;
}

const TodoListComponent: React.SFC<Props> = ({
  todos,
  toggleTodo,
  deleteTodo,
  classes,
}) => (
  <List className={classes.root}>
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
  </List>
);

export const TodoList = withStyles(styles)(TodoListComponent);
