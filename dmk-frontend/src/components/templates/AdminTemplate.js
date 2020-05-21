// React
import React, { useState } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '56px',
    '-webkit-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    '-moz-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    'box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)'
  }
}));

const AdminTemplate = (props) => {
  const { addForm, dataTable } = props;
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container spacing={4}>
        <Box clone order={{ xs: 2, md: 1 }}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className={classes.paper}>{dataTable}</Paper>
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.paper}>{addForm}</Paper>
          </Grid>
        </Box>
        </Grid>
    </div>
  );
};

export default AdminTemplate;
