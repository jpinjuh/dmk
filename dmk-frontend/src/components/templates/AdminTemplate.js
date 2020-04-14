// React
import React, { useState } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const AdminTemplate = (props) => {
  const { addForm, dataTable } = props;
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={8}>
            <Box>{ dataTable }</Box>
          </Grid>
          <Grid item xs={4}>
            <Box pt={14} pl={12}>{ addForm }</Box>
          </Grid>
        </Grid>
    </div>
  );
};

export default AdminTemplate;
