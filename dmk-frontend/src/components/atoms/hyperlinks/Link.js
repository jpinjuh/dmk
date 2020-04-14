// React
import React from "react";

// MUI
//import { Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// External library elements
import { Link as RouterLink } from "react-router-dom";

const style = makeStyles(theme => ({
    RouterLink: {
      float: 'right',
      textDecoration: 'none'
    }
  
  }));

const Link = props => {
  const { goTo, label } = props;
  const classes = style();

  return (
    <>
      <RouterLink className={classes.RouterLink} to={goTo}>{label}</RouterLink>
    </>
  );
};

export default Link;
