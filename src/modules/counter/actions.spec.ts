import * as actions from '.';

test('should create an action to increment counter', () => {
  const expectedAction = {
    type: actions.INCREMENT,
    payload: {
      amount: 1,
    },
  };
  expect(actions.incrementAmount(1)).toEqual(expectedAction);
});

test('should create an action to decrement counter', () => {
  const expectedAction = {
    type: actions.DECREMENT,
    payload: {
      amount: 4,
    },
  };
  expect(actions.decrementAmount(4)).toEqual(expectedAction);
});

test('should create an action to async increment counter', () => {
  const expectedAction = {
    type: actions.ASYNC_INCREMENT,
    payload: {
      amount: 7,
    },
  };
  expect(actions.asyncIncrementAmount(7)).toEqual(expectedAction);
});
