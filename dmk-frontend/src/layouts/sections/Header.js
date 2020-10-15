// React, Redux, Router
import React from "react";
import clsx from 'clsx';


// MUI
import { AppBar, Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

// Atoms
import ToogleMenu from "Components/organisms/ToogleMenu"

const drawerWidth = 250;


const style = makeStyles(theme => ({
  appBar: {
    zIndex: '1300',
    backgroundColor: '#fff',
    border: '1px solid #E3E3E3',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  logo1: {
    color: theme.palette.primary.main
  },
  logo2: {
    color: theme.palette.secondary.main
  }
}));

const Header = ({open, setOpen}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const classes = style();

  return (
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={0}
      >
      {user ? (
        <Toolbar>
          <Box>
            <IconButton
              aria-label="open drawer"
              onClick={setOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box flexGrow={1}>
            <div style={{fontSize: '20px', fontWeight: 'bold'}}>
              <span className={classes.logo2}>DMK</span>
              <span className={classes.logo1}>Sys</span>
            </div>
          </Box>
          <Box ml={1}>

            <ToogleMenu activeUser={user.user_claims} />

          </Box>
        </Toolbar>
      ) : ('')}
    </AppBar>
  );
};

export default Header;
