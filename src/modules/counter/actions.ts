import { Action } from 'redux';

export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';

export interface Actions extends Action<typeof INCREMENT | typeof DECREMENT> {
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
