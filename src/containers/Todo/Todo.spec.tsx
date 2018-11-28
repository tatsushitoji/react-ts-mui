import * as React from 'react';
import reduxMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Todo } from '.';

const mockStore = reduxMockStore();
let store: any;
let wrapper: any;

beforeEach(() => {
  store = mockStore({
    todo: {
      todos: [
        {
          id: '1',
          text: 'some Todo',
          completed: false,
        },
      ],
    },
  });
  store.dispatch = jest.fn();
  wrapper = shallow(<Todo store={store}>todo</Todo>);
});

test('should map state to props', () => {
  // TODO: avoid specify props key
  expect(wrapper.props().todos[0]).toEqual(
    expect.objectContaining({
      text: 'some Todo',
    }),
  );
});

test('should map addTodo to dispatch ADD_TODO action', () => {
  wrapper.props().addTodo('some Todo');
  expect(store.dispatch).toHaveBeenCalledWith({
    type: 'todo/add_todo',
    payload: {
      text: 'some Todo',
    },
  });
});
