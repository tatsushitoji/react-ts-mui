import { RouterState } from 'connected-react-router';
import { State as CounterState } from '../modules/counter';
import { State as todoState } from '../modules/todo';

export interface RootState {
  counter: CounterState;
  todo: todoState;
  router: RouterState;
}
