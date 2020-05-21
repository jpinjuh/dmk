// React
import React from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: '56px',
    '-webkit-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    '-moz-box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
    'box-shadow': '0px 0px 25px 0px rgba(0,0,0,0.07)',
  }
}));

const ModeratorTemplate = ({ moderatorDataTable }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>{ moderatorDataTable }</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ModeratorTemplate;
