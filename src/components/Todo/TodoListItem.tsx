import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

type Props = any;

export const TodoListItem: React.SFC<Props> = ({
  text,
  compleated,
  toggle,
}) => (
  <ListItem>
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <Checkbox onChange={toggle} checked={compleated} />
    </ListItemSecondaryAction>
  </ListItem>
);
