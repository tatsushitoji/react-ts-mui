import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CounterContainer } from './containers/Counter';
import store from './store';

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <CounterContainer />
    </Provider>,
    document.body && document.body.appendChild(document.createElement('div')),
  );

renderApp();
