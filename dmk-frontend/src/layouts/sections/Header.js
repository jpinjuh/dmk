// React, Redux, Router
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

// MUI
import { AppBar, Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Atoms
import Logo from "Components/atoms/UI/Logo";
import Button from "Components/atoms/buttons/Button";

// Actions
import { logOut } from "Modules/units/Auth";

const style = makeStyles(() => ({
  title: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'white',
    '-webkit-box-shadow': '0px 5px 10px 0px rgba(0,0,0,0.10)',
    '-moz-box-shadow': '0px 5px 10px 0px rgba(0,0,0,0.10)',
    'box-shadow': '0px 5px 10px 0px rgba(0,0,0,0.10)'
  }
}));

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const classes = style();

  return (
    <AppBar position="fixed" className={classes.appBar} >
      <Toolbar>
        <Box className={classes.title}>
          <Logo width="115px" goTo={user ? "admin" : ""} />
        </Box>
        <Box ml={1}>
          {user ? (
            <Button
              label="Log out"
              color="secondary"
              icon="exit_to_app"
              onClick={() => dispatch(logOut(history))}
            />
          ) : ('')}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
