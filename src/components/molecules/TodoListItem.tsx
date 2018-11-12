import * as React from 'react';
import { pure } from 'recompose';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Todo } from '../../modules/todo';
import { Props } from '../pages/Todo';

interface ListItemProps extends Todo {
  toggle: Props['toggle'];
}

export const Item: React.SFC<ListItemProps> = ({
  id,
  text,
  completed,
  toggle,
}) => (
  <ListItem>
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <Checkbox id={id} onChange={toggle} checked={completed} />
    </ListItemSecondaryAction>
  </ListItem>
);

export const TodoListItem = pure(Item);
