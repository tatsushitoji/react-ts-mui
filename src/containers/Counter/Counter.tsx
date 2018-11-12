import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../stores/store';
import {
  incrementAmount,
  decrementAmount,
  asyncIncrementAmount,
} from '../../modules/counter';
import {
  Counter as CounterComponent,
  Props,
} from '../../components/pages/Counter';

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (_: React.SyntheticEvent) => dispatch(incrementAmount(3)),
  decrement: (_: React.SyntheticEvent) => dispatch(decrementAmount(2)),
  asyncIncrement: (_: React.SyntheticEvent) =>
    dispatch(asyncIncrementAmount(5)),
});

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)<Props & { store?: unknown }>(CounterComponent);
