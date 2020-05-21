// React
import React, { useState } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '56px',
    '-webkit-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    '-moz-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    'box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
  }
}));

const MainTemplate = (props) => {
  const { dataTable, searchForm } = props;
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>{searchForm}</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>{dataTable}</Paper>
          </Grid>
        </Grid>
    </div>
  );
};

export default MainTemplate;
