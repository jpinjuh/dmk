import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from "react-router-dom";
import clsx from 'clsx';

// Mui
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

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
    '-webkit-box-shadow': 'inset -5px 0px 20px 0px rgba(0,0,0,0.2)',
    '-moz-box-shadow': 'inset -5px 0px 20px 0px rgba(0,0,0,0.2)',
    'box-shadow': 'inset -5px 0px 20px 0px rgba(0,0,0,0.2)',
    color: 'white',
    border: 'none'
  },
  drawerContainer: {
    overflow: 'auto',
    width: drawerWidth,
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
  },
  nested: {
    paddingLeft: theme.spacing(4),
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
  {name:'Kršteni', path: '/kršteni'},
  {name:'Osobe', path: '/osobe'},
]

const Sidebar = ({open, setClosed}) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [nestedOpen, setNestedOpen] = React.useState(true);
  const administrationArray = ['Role', 'Prava', 'Privilegije', 'Korisnici']

  const handleClick = () => {
    setNestedOpen(!nestedOpen);
    console.log(nestedOpen)
  };

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
            <ChevronLeftIcon style={{ color: 'white' }} />
          </IconButton>
        </div>
        <Divider />
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={handleClick}>
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
            {sidebarListItems.map(route => (
              !administrationArray.includes(route.name) &&
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
