import * as React from 'react';
import { PaperContainer } from '../../atoms/PaperContainer';
import Button from '@material-ui/core/Button';

export interface Props {
  count: number;
  increment: React.MouseEventHandler<HTMLButtonElement>;
  decrement: React.MouseEventHandler<HTMLButtonElement>;
  asyncIncrement: React.MouseEventHandler<HTMLButtonElement>;
}

export const Counter: React.SFC<Props> = ({
  count,
  increment,
  decrement,
  asyncIncrement,
}) => (
  <PaperContainer>
    <div data-test="counter">count: {count}</div>
    <Button
      variant="contained"
      color="primary"
      onClick={increment}
      data-test="increment-button"
    >
      Increment 3
    </Button>
    <Button
      variant="contained"
      color="secondary"
      onClick={decrement}
      data-test="decrement-button"
    >
      Decrement 2
    </Button>
    <Button
      variant="contained"
      color="default"
      onClick={asyncIncrement}
      data-test="async-increment-button"
    >
      Async Increment 5
    </Button>
  </PaperContainer>
);
