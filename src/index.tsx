import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { configureStore } from './stores/store';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

const store = configureStore({});

const renderApp = () =>
  ReactDOM.render(
    <React.Fragment>
      <Provider store={store}>
        <App>TODO: use react-router</App>
      </Provider>
    </React.Fragment>,
    document.body && document.body.appendChild(document.createElement('div')),
  );

renderApp();
