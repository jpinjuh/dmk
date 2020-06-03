// React
import React, { useState } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    '-webkit-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    '-moz-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    'box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    paddingBottom: '24px',
    border: '1px solid #e0e0e0'
  },
  paper2: {
    '-webkit-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    '-moz-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    'box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    padding: '24px',
    border: '1px solid #e0e0e0'
  },
  paperGrid: {
    padding: '8px'
  }
}));

const MainTemplate = (props) => {
  const { dataTable, Form } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {Form && <Grid item className={classes.paperGrid} xs={12}>
          <Paper elevation={0} className={classes.paper1}>{Form}</Paper>
        </Grid>}
        {dataTable && <Grid item className={classes.paperGrid} xs={12}>
          <Paper elevation={0} className={classes.paper2}>{dataTable}</Paper>
        </Grid>}
      </Grid>
    </div>
  );
};

export default MainTemplate;
