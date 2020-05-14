// React
import React, { useState } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const AdminTemplate = (props) => {
  const { addForm, dataTable } = props;
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container>
        <Box clone order={{ xs: 2, md: 1 }}>
          <Grid item xs={12} md={8}>
            <Box>{dataTable}</Box>
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={4}>
            <Box pt={14} pl={12}>{addForm}</Box>
          </Grid>
        </Box>
        </Grid>
    </div>
  );
};

export default AdminTemplate;
