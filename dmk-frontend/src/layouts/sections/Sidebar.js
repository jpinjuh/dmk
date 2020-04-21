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
    marginTop: theme.spacing(16),
    '& .MuiListItem-button': {
        paddingLeft: '24px',
        borderRadius: '7px'
    },
  },
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

const Sidebar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
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
