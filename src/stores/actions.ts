import { Actions as CounterActions } from '../modules/counter/actions';
import { Actions as TodoActions } from '../modules/todo/actions';

export type RootActions = CounterActions | TodoActions;
