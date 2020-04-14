// React, Redux, Router
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Material-UI
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Layout Components
import Sidebar from 'Layouts/sections/Sidebar';
import Header from 'Layouts/sections/Header';

const style = makeStyles(theme => ({
  container: {
    maxWidth: '100vw',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(4),
    display: 'flex'
  },
  content: {
    width: '100%'
  },
}));

const MainLayout = (state) => {
  const history = useHistory();
  const classes = style();
    
  return (
    <>
      <Container className={classes.container}>
        <Header></Header>
        <Sidebar ></Sidebar>
        <Box className={classes.content}>{state.children}</Box>
      </Container>
    </>
  );
};

export default MainLayout;
