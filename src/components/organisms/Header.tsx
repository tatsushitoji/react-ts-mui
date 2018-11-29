import * as React from 'react';
import { pure } from 'recompose';
import styled from '@emotion/styled';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const StyledAppBar = styled(AppBar as React.SFC<AppBarProps>)`
  background-color: #466168;
`;

const AppTitle = styled(Typography as React.SFC<TypographyProps>)`
  flex-grow: 1;
`;

export const HeaderComponent: React.SFC = () => (
  <StyledAppBar position="fixed">
    <Toolbar>
      <AppTitle variant="h6" color="inherit" noWrap={true}>
        Hello My App
      </AppTitle>
      {/* <IconButton color="inherit">
        <MoreIcon />
      </IconButton> */}
    </Toolbar>
  </StyledAppBar>
);

export const Header = pure(HeaderComponent);
