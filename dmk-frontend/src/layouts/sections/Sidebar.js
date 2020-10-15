import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from "react-router-dom";
import clsx from 'clsx';

// Mui
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Box } from '@material-ui/core';

// Atoms
import Logo from "Components/atoms/UI/Logo";
import Icon from "Components/atoms/UI/Icon";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: 'none',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fff',
    border: '1px solid #E3E3E3',
  },
  drawerContainer: {
    overflow: 'auto',
    width: drawerWidth,
    position: 'fixed',
    marginTop: theme.spacing(10),
    '& .MuiListItem-button': {
      paddingLeft: '16px !important',
    },
    '& .Mui-selected': {
      borderLeft: `3px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      '& .MuiIcon-root': {
        color: theme.palette.primary.main
      }
    },
    '& .MuiListItemIcon-root':{
      width: '40px !important',
      minWidth: '24px !important'
    }
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
  },
  nested: {
    paddingLeft: theme.spacing(7),
  },
}));


const sidebarListItems = [
  {name:'Role', path: '/role'},
  {name:'Prava', path: '/prava'},
  {name:'Privilegije', path: '/privilegije'},
  {name:'Korisnici', path: '/korisnici'},
  {name:'Župe', path: '/župe'},
  {name:'Biskupije', path: '/biskupije'},
  {name:'Gradovi', path: '/gradovi'},
  {name:'Države', path: '/države'},
  {name:'Osobe', path: '/osobe', icon: 'people'},
  {name:'Dodaj krsni list', path: '/krsni', icon: 'person_add'},
  {name:'Dodaj krizmena cedulju', path: '/krizmena', icon: 'note_add'},
  {name:'Dodaj vjenčani list', path: '/vjenčani', icon: 'post_add'},
  {name:'Dodaj smrtni list', path: '/smrtni', icon: 'library_books'},
]

const Sidebar = ({open, setClosed}) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [nestedOpen, setNestedOpen] = useState(true);
  const administrationArray = ['Role', 'Prava', 'Privilegije', 'Korisnici', 'Župe', 'Biskupije', 'Gradovi', 'Države']

  const handleClick = () => {
    setNestedOpen(!nestedOpen);
  };

  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        className={clsx(classes.drawer, open===false && classes.hidden)}
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
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <Icon icon="security" size="16" color="secondary"/>
              </ListItemIcon>
              <ListItemText primary="Administracija" />
              {nestedOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {sidebarListItems.map(route => (
                  administrationArray.includes(route.name) &&
                  <ListItem
                    button key={route.name}
                    component={Link}
                    to={route.path}
                    selected={route.path === location.pathname}
                  >
                    <ListItemText className={classes.nested} primary={route.name} />
                  </ListItem>

                ))}
              </List>
            </Collapse>
            {sidebarListItems.map((route, index) => (
              !administrationArray.includes(route.name) &&
              <ListItem
                button key={route.name}
                component={Link}
                to={route.path}
                selected={route.path === location.pathname}
              >
                <ListItemIcon>
                    <Icon icon={route.icon} size="16" color="secondary"/>
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
  );
}

export default Sidebar;
