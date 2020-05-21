// React, Redux, Router
import React from "react";
import clsx from 'clsx';


// MUI
import { AppBar, Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Atoms
import Logo from "Components/atoms/UI/Logo";
import ToogleMenu from "Components/organisms/ToogleMenu"

const drawerWidth = 240;


const style = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'white',
    '-webkit-box-shadow': '0px 5px 10px 0px rgba(0,0,0,0.07)',
    '-moz-box-shadow': '0px 5px 10px 0px rgba(0,0,0,0.07)',
    'box-shadow': '0px 5px 10px 0px rgba(0,0,0,0.07)',
    zIndex: '1300',
    backgroundColor: '#f9f9f9',
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
      >
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
        <Box className={classes.title}>
          <Logo width="115px" goTo={user ? "admin" : ""} />
        </Box>
        <Box ml={1}>
          {user ? (
            <ToogleMenu activeUser={user.user_claims} />
          ) : ('')}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
