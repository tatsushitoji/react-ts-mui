import { compose } from 'recompose';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../stores';
import { RootActions } from '../../action';
import {
  addTodo,
  toggleTodo,
  asyncAddTodo,
  deleteTodo,
} from '../../modules/todo';
import { Todo as TodoComponent, Props } from '../../components/pages/Todo';

const mapStateToProps = (state: RootState) => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>,
) => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
  asyncAddTodo: (text: string) => dispatch(asyncAddTodo(text)),
  toggleTodo: (id: string) => (_: React.SyntheticEvent) =>
    dispatch(toggleTodo(id)),
  deleteTodo: (id: string) => (_: React.SyntheticEvent) =>
    dispatch(deleteTodo(id)),
});

export const Todo = compose<Props, { store?: unknown }>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TodoComponent);
