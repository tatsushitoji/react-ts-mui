import { TestScheduler } from 'rxjs/testing';
import { asyncIncrementEpic } from '.';

let testScheduler: any;

beforeEach(() => {
  testScheduler = new TestScheduler((expected, actual) => {
    expect(expected).toEqual(actual);
  });
});

afterEach(() => {
  testScheduler.flush();
});

test('should call actions after 1000ms', () => {
  testScheduler.run((helpers: any) => {
    const { cold, expectObservable } = helpers;
    const action$ = cold('-a', {
      a: { type: 'counter/async_increment', payload: { amount: 3 } },
    });
    const state$: any = null;
    const dependencies = {};
    const output$ = asyncIncrementEpic(action$, state$, dependencies);
    expectObservable(output$).toBe('- 1000ms a', {
      a: {
        type: 'counter/increment',
        payload: { amount: 3 },
      },
    });
  });
});
