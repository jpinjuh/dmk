// React
import React from "react";

// Material-UI
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

// Layout components
import Header from "Layouts/sections/Header";

const TripleLayout = state => (
  <>
    <Header />
    <Container>
      <Box mt={11}>{state.children}</Box>
    </Container>
  </>
);

export default TripleLayout;
