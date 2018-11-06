import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../stores/store';
import { RootActions } from '../../stores/actions';
import { addTodo, toggleTodo, asyncAddTodo } from '../../modules/todo';
import { TodoComponent, Props } from '../../components/Todo';

const mapStateToProps = (state: RootState) => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>,
) => ({
  add: (text: string) => dispatch(addTodo(text)),
  asyncAdd: (text: string) => dispatch(asyncAddTodo(text)),
  toggle: (event: React.ChangeEvent) => dispatch(toggleTodo(event.target.id)),
});

export const Todo = connect(
  mapStateToProps,
  mapDispatchToProps,
)<Props & { store?: unknown }>(TodoComponent);
