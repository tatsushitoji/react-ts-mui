import { INCREMENT, DECREMENT, Actions, State } from '.';

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
