import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Counter } from './containers/Counter';
import { Todo } from './containers/Todo';
import { configureStore } from './stores/store';
import { createGlobalStyle } from './theme';

const reactStyledReboot = require('react-styled-reboot'); // TODO: use @types/react-styled-reboot
const GlobalStyle = createGlobalStyle`
  ${reactStyledReboot()}
`;

const store = configureStore({});

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <React.Fragment>
        <Counter />
        <Todo />
      </React.Fragment>
    </Provider>
  </React.Fragment>
);

const renderApp = () =>
  ReactDOM.render(
    <App />,
    document.body && document.body.appendChild(document.createElement('div')),
  );

renderApp();

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}
