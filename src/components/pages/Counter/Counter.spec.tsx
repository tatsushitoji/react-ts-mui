import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Counter } from '.';

let mockIncrement: any;
let mockDecrement: any;
let mockAsyncIncrement: any;

beforeEach(() => {
  mockIncrement = jest.fn();
  mockDecrement = jest.fn();
  mockAsyncIncrement = jest.fn();
});

test('should render self with initial state', () => {
  const tree = shallow(
    <Counter
      count={0}
      increment={mockIncrement}
      decrement={mockDecrement}
      asyncIncrement={mockAsyncIncrement}
    />,
  );
  expect(toJson(tree)).toMatchSnapshot();
});
