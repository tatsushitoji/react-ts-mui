import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../stores/store';
import {
  incrementAmount,
  decrementAmount,
  asyncIncrementAmount,
} from '../../modules/counter';
import { Counter } from '../../components/Counter';

const mapStateToProps = (state: State) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (_: React.MouseEvent) => dispatch(incrementAmount(3)),
  decrement: (_: React.MouseEvent) => dispatch(decrementAmount(2)),
  asyncIncrement: (_: React.MouseEvent) => dispatch(asyncIncrementAmount(5)),
});

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
