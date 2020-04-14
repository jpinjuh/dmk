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
    position: "fixed",
    marginTop: theme.spacing(16),
    '& .MuiListItem-button': {
        paddingLeft: '24px',
        borderRadius: '7px'
    },
  },
}));

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
            {['Role', 'Prava', 'Privilegije', 'Korisnici', 'Tenanti', 'Zupe', 'Gradovi', 'Drzave'].map((text, index) => (
              <ListItem button key={text} component={Link} to={"/" + text.toLowerCase()} selected={('/' + text.toLowerCase()) === location.pathname}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Kršteni', 'Vjenčani', 'Umrli', 'Krizmanici', 'Prvopričesnici'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
  );
}

export default Sidebar;
