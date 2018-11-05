export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';
export const ASYNC_INCREMENT = 'counter/async_increment';

export const incrementAmount = (amount: number) => ({
  type: INCREMENT as typeof INCREMENT,
  payload: {
    amount,
  },
});

export const decrementAmount = (amount: number) => ({
  type: DECREMENT as typeof DECREMENT,
  payload: {
    amount,
  },
});

export const asyncIncrementAmount = (amount: number) => ({
  type: ASYNC_INCREMENT as typeof ASYNC_INCREMENT,
  payload: {
    amount,
  },
});

export type Actions = ReturnType<
  typeof incrementAmount | typeof decrementAmount | typeof asyncIncrementAmount
>;
