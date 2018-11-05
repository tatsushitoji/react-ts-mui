import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../stores/store';
import { addTodo, toggleTodo } from '../../modules/todo';
import { TodoComponent, Props } from '../../components/Todo';

const mapStateToProps = (state: State) => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: (text: string) => dispatch(addTodo(text)),
  toggle: (id: number) => (_: React.ChangeEvent) => dispatch(toggleTodo(id)),
});

export const Todo = connect(
  mapStateToProps,
  mapDispatchToProps,
)<Props & { store?: unknown }>(TodoComponent);
