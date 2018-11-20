import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { PaperContainer } from '../../atoms';
import { CounterCount } from '../../molecules';
import { CounterButtons } from '../../organisms';

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
}) => {
  // EXAMPLE: if count is over 10, redirect HOME
  if (count > 10) {
    return <Redirect to={{ pathname: '/' }} />;
  }
  return (
    <PaperContainer>
      <CounterCount count={count} />
      <CounterButtons
        increment={increment}
        decrement={decrement}
        asyncIncrement={asyncIncrement}
      />
    </PaperContainer>
  );
};
