// React
import React from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const ModeratorTemplate = ({ moderatorDataTable }) => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Box>{ moderatorDataTable }</Box>
          </Grid>
        </Grid>
    </div>
  );
};

export default ModeratorTemplate;
