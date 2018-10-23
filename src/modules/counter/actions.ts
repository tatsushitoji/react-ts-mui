import { Action } from 'redux';

export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';
export const ASYNC_INCREMENT = 'counter/async_increment';

export interface Actions
  extends Action<typeof INCREMENT | typeof DECREMENT | typeof ASYNC_INCREMENT> {
  payload: {
    amount: number;
  };
}

export const incrementAmount = (amount: number): Actions => ({
  type: INCREMENT,
  payload: {
    amount,
  },
});

export const decrementAmount = (amount: number): Actions => ({
  type: DECREMENT,
  payload: {
    amount,
  },
});

export const asyncIncrementAmount = (amount: number): Actions => ({
  type: ASYNC_INCREMENT,
  payload: {
    amount,
  },
});
