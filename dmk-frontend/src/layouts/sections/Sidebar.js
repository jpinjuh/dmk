import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: 'none'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    borderBottomRightRadius: '25px',
    color: 'white',
    border: 'none'
  },
  drawerContainer: {
    overflow: 'auto',
    position: 'fixed',
    marginTop: theme.spacing(16),
    '& .MuiListItem-button': {
        paddingLeft: '24px',
        borderRadius: '7px'
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  hidden: {
    display: 'none'
  }
}));

const sidebarListItems = [
  {name:'Role', path: '/role'},
  {name:'Prava', path: '/prava'},
  {name:'Privilegije', path: '/privilegije'},
  {name:'Korisnici', path: '/korisnici'},
  {name:'Župe', path: '/župe'} ,
  {name:'Gradovi', path: '/gradovi'},
  {name:'Države', path: '/države'},
]

const Sidebar = ({open, setClosed}) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
      <Drawer
        className={clsx(classes.drawer, open===false && classes.hidden)}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={setClosed}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {sidebarListItems.map(route => (
              <ListItem 
                button key={route.name} 
                component={Link} 
                to={route.path} 
                selected={route.path === location.pathname}
              >
                <ListItemText primary={route.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
  );
}

export default Sidebar;
