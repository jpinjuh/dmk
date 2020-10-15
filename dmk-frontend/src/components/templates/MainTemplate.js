// React
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Box} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    paddingBottom: '24px',
    border: '1px solid #E3E3E3;',
    marginBottom: theme.spacing(3)
  },
  paper2: {
    padding: '24px',
    border: '1px solid #E3E3E3;',
    marginBottom: theme.spacing(3)
  },
  paperGrid: {
    //padding: '8px'
  },
  breadcrumbs: {
    fontSize: '20px',
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    textTransform: 'capitalize'
  }
}));

const MainTemplate = (props) => {
  const { dataTable, Form } = props;
  const classes = useStyles();
  const location = useLocation();
  console.log(location)
  const path = location.pathname.split('/');
  console.log(path)

  return (
    <div className={classes.root}>
      <Box mb={3}>
        {(!path[2]) 
        ? <Breadcrumbs className={classes.breadcrumbs}>
            <Link to="/role" className={classes.link}>
              DMK
            </Link>
            <Typography color="secondary" style={{textTransform: 'capitalize', fontSize: '20px'}}>
              {path[1]}
            </Typography>
          </Breadcrumbs>
        : <Breadcrumbs className={classes.breadcrumbs}>
            <Link to="/role" className={classes.link}>
              DMK
            </Link>
            <Link to={`/${path[1]}`} className={classes.link}>
              {path[1]}
            </Link>
            <Typography color="secondary" style={{fontSize: '20px'}}>
              Pregled detalja
            </Typography>
          </Breadcrumbs>}
      </Box>
      <Grid container>
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
