import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// tslint:disable-next-line
import styled from '../../theme';

export type Props = {
  count: number;
  increment: React.MouseEventHandler<HTMLButtonElement>;
  decrement: React.MouseEventHandler<HTMLButtonElement>;
  asyncIncrement: React.MouseEventHandler<HTMLButtonElement>;
};

const CounterPaper = styled(Paper)`
  padding: 20px;
`;

export const Counter: React.SFC<Props> = ({
  count,
  increment,
  decrement,
  asyncIncrement,
}) => (
  <div>
    <CounterPaper>count: {count}</CounterPaper>
    <Button variant="contained" color="primary" onClick={increment}>
      Increment 3
    </Button>
    <Button variant="contained" color="secondary" onClick={decrement}>
      Decrement 2
    </Button>
    <Button variant="contained" color="default" onClick={asyncIncrement}>
      Async Increment 5
    </Button>
  </div>
);
