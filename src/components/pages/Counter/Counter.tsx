import * as React from 'react';
import { compose } from 'recompose';
import { Redirect } from 'react-router-dom';
import { head } from '../../../components/hocs/head';
import { PaperContainer } from '../../atoms';
import { CounterCount } from '../../molecules';
import { CounterButtons } from '../../organisms';

export interface Props {
  count: number;
  increment: React.MouseEventHandler<HTMLButtonElement>;
  decrement: React.MouseEventHandler<HTMLButtonElement>;
  asyncIncrement: React.MouseEventHandler<HTMLButtonElement>;
}

const CounterPage: React.SFC<Props> = ({
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

export const Counter = compose<Props, Props>(head('Counter'))(CounterPage);
