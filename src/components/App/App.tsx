import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { compose } from 'recompose';
import {
  ComponentWithDrawerState,
  EnhancedProps,
} from '../hocs/ComponentWithDrawerState';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../theme';
import { Main } from '../templates/Main';

interface Props {
  route: RouteConfig;
}

interface OuterProps {}

type InnerProps = EnhancedProps & Props;

export const AppComponent: React.SFC<InnerProps> = ({
  route,
  sideOpen,
  setSideOpen,
}) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Main sideOpen={sideOpen} setSideOpen={setSideOpen}>
      {renderRoutes(route.routes)}
    </Main>
  </MuiThemeProvider>
);

export const App = compose<InnerProps, OuterProps>(
  ComponentWithDrawerState<InnerProps>(),
)(AppComponent);
