import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { PaperContainer } from '../../atoms';

export const Home: React.SFC = () => (
  <PaperContainer>
    <Typography component="h3" variant="h3">
      Home
    </Typography>
    <Typography variant="overline">this page is Home</Typography>
    <Button variant="contained" color="primary">
      <Link to="/counter">Counter</Link>
    </Button>
    <Button variant="contained" color="primary">
      <Link to="private/todo">Todo</Link>
    </Button>
  </PaperContainer>
);
