// React
import React from "react";

// Material-UI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// Layout components
import Header from "Layouts/sections/Header";

const style = makeStyles(theme => ({
  container: {
    maxWidth: '100vw',
    padding: 0,
    height: '100vh',
    display: 'flex',
  },
}));

const TripleLayout = state => {
  const classes = style();

  return (
  <>
    <Header />
    <Container className={classes.container}>
      {state.children}
    </Container>
  </>
)};

export default TripleLayout;
