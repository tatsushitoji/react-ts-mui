import * as React from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../theme';
import { Main } from '../templates/Main';

export const App: React.SFC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Main>{children}</Main>
  </MuiThemeProvider>
);
