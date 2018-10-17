import * as React from 'react';

type Props = {
  count: number;
  increment: React.MouseEventHandler<HTMLButtonElement>;
  decrement: React.MouseEventHandler<HTMLButtonElement>;
};

export const Counter: React.SFC<Props> = ({ count, increment, decrement }) => (
  <div>
    <p>count: {count}</p>
    <button onClick={increment}>Increment 3</button>
    <button onClick={decrement}>Decrement 2</button>
  </div>
);
