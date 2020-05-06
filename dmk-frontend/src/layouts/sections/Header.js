// React, Redux, Router
import React from "react";

// MUI
import { AppBar, Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Atoms
import Logo from "Components/atoms/UI/Logo";
import ToogleMenu from "Components/organisms/ToogleMenu"

const style = makeStyles(() => ({
  title: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'white',
    '-webkit-box-shadow': '0px 5px 10px 0px rgba(0,0,0,0.10)',
    '-moz-box-shadow': '0px 5px 10px 0px rgba(0,0,0,0.10)',
    'box-shadow': '0px 5px 10px 0px rgba(0,0,0,0.10)',
    zIndex: '1300'
  }
}));

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const classes = style();

  return (
    <AppBar position="fixed" className={classes.appBar} >
      <Toolbar>
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
