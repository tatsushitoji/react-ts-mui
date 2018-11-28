import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../stores';
import { RootActions } from '../../action';

export type TAction<R> = ThunkAction<R, RootState, undefined, RootActions>;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
