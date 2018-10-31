import { reducer as todoReducer } from '.';

test('should return the initial state', () => {
  let state;
  state = todoReducer(undefined, {} as any);
  expect(state).toMatchObject({ todos: [] });
});

test('should handle ADD_TODO', () => {
  let state;
  state = todoReducer(
    { todos: [] },
    { type: 'todo/add_todo', payload: { text: 'todo item 1' } },
  );
  expect(state.todos[0]).toMatchObject({
    id: 0,
    text: 'todo item 1',
    completed: false,
  });
});
