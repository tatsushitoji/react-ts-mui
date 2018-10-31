import * as actions from '.';

test('should create an action to add TODOs', () => {
  const expectedAction = {
    type: actions.ADD_TODO,
    payload: {
      text: 'todo item 1',
    },
  };
  expect(actions.addTodo('todo item 1')).toEqual(expectedAction);
});

test('should create an action to toggle counter', () => {
  const expectedAction = {
    type: actions.TOGGLE_TODO,
    payload: {
      id: 123,
    },
  };
  expect(actions.toggleTodo(123)).toEqual(expectedAction);
});
