import * as React from 'react';
import { pure } from 'recompose';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
  id: string;
  text: string;
  completed: boolean;
  toggleTodo: (_: string) => (_: React.SyntheticEvent) => void;
  deleteTodo: (_: string) => (_: React.SyntheticEvent) => void;
}

export const Item: React.SFC<Props> = ({
  id,
  text,
  completed,
  toggleTodo,
  deleteTodo,
}) => (
  <ListItem>
    <Checkbox onChange={toggleTodo(id)} checked={completed} />
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={deleteTodo(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export const TodoListItem = pure(Item);
