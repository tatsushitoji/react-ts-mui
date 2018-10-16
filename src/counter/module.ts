const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

export interface CounterActions {
  type: typeof INCREMENT | typeof DECREMENT;
  payload: {
    amount: number;
  };
}

export interface CounterState {
  count: number;
}

export const incrementAmount = (amount: number): CounterActions => ({
  type: INCREMENT,
  payload: {
    amount,
  },
});

export const decrementAmount = (amount: number): CounterActions => ({
  type: DECREMENT,
  payload: {
    amount,
  },
});

const initialState: CounterState = {
  count: 0,
};

export const counter = (
  state: CounterState = initialState,
  action: CounterActions,
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload.amount };
    case DECREMENT:
      return { ...state, count: state.count - action.payload.amount };
    default:
      return state;
  }
};
