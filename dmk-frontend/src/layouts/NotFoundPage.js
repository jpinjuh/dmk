// React
import React from "react";

// MUI
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles(() => ({
  title: {
    flexGrow: 1
  }
}));

const NotFoundPage = () => {
  const classes = style();
  return (
    <Box display="flex" justifyContent="center" align-items="center">
      <Typography>404 Page Not Found</Typography>
    </Box>
  );
};

export default NotFoundPage;
