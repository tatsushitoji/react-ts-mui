import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CounterContainer } from './containers/Counter';
import { configureStore } from './stores/store';
import { createGlobalStyle } from './theme';

const reactStyledReboot = require('react-styled-reboot'); // TODO: use @types/react-styled-reboot
const GlobalStyle = createGlobalStyle`
  ${reactStyledReboot()}
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Provider store={configureStore()}>
      <CounterContainer />
    </Provider>
  </React.Fragment>
);

const renderApp = () =>
  ReactDOM.render(
    <App />,
    document.body && document.body.appendChild(document.createElement('div')),
  );

renderApp();
