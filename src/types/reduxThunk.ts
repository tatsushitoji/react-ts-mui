import { ThunkAction } from 'redux-thunk';
import { RootState } from '../stores/store';
import { RootActions } from '../stores/actions';

export type TAction<R> = ThunkAction<R, RootState, undefined, RootActions>;
