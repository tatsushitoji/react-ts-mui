import * as React from 'react';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import { Props } from '../pages/Todo';
import { Todo } from '../../modules/todo';
import { TodoListItem } from '../molecules/TodoListItem';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing.unit * 4,
    },
  });

interface ListProps extends WithStyles<typeof styles> {
  todos: Props['todos'];
  toggle: Props['toggle'];
}

const TodoListComponent: React.SFC<ListProps> = ({
  todos,
  toggle,
  classes,
}) => (
  <List className={classes.root}>
    {todos.map((item: Todo) => (
      <TodoListItem
        id={item.id}
        key={item.id}
        text={item.text}
        completed={item.completed}
        toggle={toggle}
      />
    ))}
  </List>
);

export const TodoList = withStyles(styles)(TodoListComponent);
