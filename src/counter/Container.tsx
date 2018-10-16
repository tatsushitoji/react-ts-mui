import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { decrementAmount, incrementAmount } from './module';
import { State, Action } from '../store';
import { Counter } from './Counter';

export interface IMapStateToProps {
  count: number;
}

export interface IMapDispatchToProps {
  increment: React.MouseEventHandler<HTMLButtonElement>;
  decrement: React.MouseEventHandler<HTMLButtonElement>;
}

const mapStateToProps = (state: State): IMapStateToProps => ({
  count: state.counter.count,
});

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): IMapDispatchToProps => ({
  increment: _ => dispatch(incrementAmount(3)),
  decrement: _ => dispatch(decrementAmount(2)),
});

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
