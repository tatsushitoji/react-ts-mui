import * as React from 'react';
import { IMapStateToProps, IMapDispatchToProps } from './Container';

type Props = IMapStateToProps & IMapDispatchToProps;

export const Counter: React.SFC<Props> = ({ count, increment, decrement }) => (
  <div>
    <p>count: {count}</p>
    <button onClick={increment}>Increment 3</button>
    <button onClick={decrement}>Decrement 2</button>
  </div>
);
