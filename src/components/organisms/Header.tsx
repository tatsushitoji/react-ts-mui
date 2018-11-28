import * as React from 'react';
import { pure } from 'recompose';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#466168',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    title: {
      flexGrow: 1,
    },
  });

interface Props extends WithStyles<typeof styles> {
  isOpen: boolean;
  toggleSideOpen: (_: React.SyntheticEvent) => void;
  theme?: Theme;
}

const HeaderComponent: React.SFC<Props> = ({ classes }: Props) => (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Typography
        className={classes.title}
        variant="h6"
        color="inherit"
        noWrap={true}
      >
        Hello My App
      </Typography>
      {/* <IconButton color="inherit">
        <MoreIcon />
      </IconButton> */}
    </Toolbar>
  </AppBar>
);

export const Header = pure(withStyles(styles)(HeaderComponent));
