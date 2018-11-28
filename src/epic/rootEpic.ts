import { combineEpics } from 'redux-observable';
import { asyncIncrementEpic } from '../modules/counter';

export const rootEpic = combineEpics(asyncIncrementEpic);
