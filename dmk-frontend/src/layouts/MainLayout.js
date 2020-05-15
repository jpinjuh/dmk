// React, Redux, Router
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from 'clsx';


// Material-UI
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Layout Components
import Sidebar from 'Layouts/sections/Sidebar';
import Header from 'Layouts/sections/Header';

const drawerWidth = 240;


const style = makeStyles(theme => ({
  container: {
    maxWidth: '100vw',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(4),
    display: 'flex'
  },
  content: {
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: 'flex !important',
    alignItems: 'center !important',
    width: '100%',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end !important',
  },
}));

const MainLayout = (state) => {
  const history = useHistory();
  const classes = style();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log(open)
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    
  return (
    <>
      <Container className={classes.container}>
        <Header open={open} setOpen={handleDrawerOpen}></Header>
        <Sidebar open={open} setClosed={handleDrawerClose}></Sidebar>
        <Box className={clsx(classes.content, {
          [classes.contentShift]: open,
        }), classes.drawerHeader}>{state.children}</Box>
      </Container>
    </>
  );
};

export default MainLayout;
