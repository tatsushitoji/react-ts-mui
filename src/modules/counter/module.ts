import { Action } from 'redux';

const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

export type Actions = UpdateAmount;

export interface UpdateAmount extends Action {
  type: typeof INCREMENT | typeof DECREMENT;
  payload: {
    amount: number;
  };
}

export interface State {
  count: number;
}

export const incrementAmount = (amount: number): UpdateAmount => ({
  type: INCREMENT,
  payload: {
    amount,
  },
});

export const decrementAmount = (amount: number): UpdateAmount => ({
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
  action: UpdateAmount,
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
