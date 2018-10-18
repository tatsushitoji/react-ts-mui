import { Action } from 'redux';

const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

export interface Actions extends Action<typeof INCREMENT | typeof DECREMENT> {
  payload: {
    amount: number;
  };
}

export interface State {
  count: number;
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

const initialState: State = {
  count: 0,
};

export const reducer = (
  state: State = initialState,
  action: Actions,
): State => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload.amount };
    case DECREMENT:
      return { ...state, count: state.count - action.payload.amount };
    default:
      return state;
  }
};
