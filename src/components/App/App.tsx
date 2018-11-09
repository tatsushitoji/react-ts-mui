import * as React from 'react';
import { compose, withStateHandlers, StateHandlerMap } from 'recompose';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../theme';
import { Main } from '../templates/Main';

interface Props {
  children: React.ReactNode;
}

export interface State {
  sideOpen: boolean;
}

export interface StateHandlers {
  setSideOpen: (_: React.SyntheticEvent) => void;
}

export type EnhancedProps = State & StateHandlers & Props;

const enhancer = compose<EnhancedProps, Props>(
  withStateHandlers<State, StateHandlerMap<State>, Props>(
    { sideOpen: false },
    {
      setSideOpen: ({ sideOpen }) => () => ({
        sideOpen: !sideOpen,
      }),
    },
  ),
);

export const AppComponent: React.SFC<EnhancedProps> = ({
  children,
  sideOpen,
  setSideOpen,
}) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Main sideOpen={sideOpen} setSideOpen={setSideOpen}>
      {children}
    </Main>
  </MuiThemeProvider>
);

export const App = enhancer(AppComponent);
