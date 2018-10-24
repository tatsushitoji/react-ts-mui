import * as React from 'react';
import reduxMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Counter } from '.';

const mockStore = reduxMockStore();
let store: any;
let wrapper: any;

beforeEach(() => {
  store = mockStore({
    counter: {
      count: 5,
    },
  });
  store.dispatch = jest.fn();
  wrapper = shallow(<Counter store={store}>bar</Counter>);
});

test('should map state and dispatch to props', () => {
  expect(wrapper.props()).toEqual(
    expect.objectContaining({
      count: 5,
    }),
  );
});

test('should map setUserName to dispatch INCREMENT action', () => {
  wrapper.props().increment();

  expect(store.dispatch).toHaveBeenCalledWith({
    type: 'counter/increment',
    payload: {
      amount: 3,
    },
  });
});
