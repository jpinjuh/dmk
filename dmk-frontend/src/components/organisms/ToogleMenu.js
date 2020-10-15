import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

// MUI
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import {Paper, Box} from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// Actions
import { logOut } from "Modules/units/Auth";

//Atoms
import Icon from "Components/atoms/UI/Icon";

// Organisms
import ChangePasswordModal from "Components/organisms/ChangePasswordModal"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menuPaper: {
    boxShadow: '0px 0px 10px #00000045',
    borderRadius: '6px'
  }
}));

const ToogleMenu = ({ activeUser }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [openPasswordModal, setOpenPasswordModal] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const userFullName = `${activeUser.first_name} ${activeUser.last_name}`

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          startIcon={<Icon icon="account_circle" size="28px" color="secondary" />}
        >
          <Typography color="secondary">
            <Box fontSize="16px" fontWeight="fontWeightMedium">{userFullName}</Box>
          </Typography>
        </Button>

        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper elevation={0} className={classes.menuPaper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Box my={2}>
                      <Typography align="center" color="secondary">
                        <Box fontWeight="fontWeightBold">{userFullName}</Box>
                      </Typography>
                      <Typography align="center" color="primary">
                        <Box fontSize="14px">Admin</Box>
                      </Typography>
                    </Box>
                    <Divider />
                    <Box py={2} px={1}>
                      <MenuItem onClick={() => { setOpenPasswordModal(true); setOpen(false) }}>
                        <ListItemIcon style={{width: "40px", minWidth: '36px'}}>
                          <Icon icon="vpn_key" size="20px" color="secondary" />
                        </ListItemIcon>
                        <Typography color="secondary">Promjeni lozinku</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => { dispatch(logOut(history)); setOpen(false) }}>
                        <ListItemIcon style={{width: "40px", minWidth: '36px'}}>
                          <Icon icon="exit_to_app" size="20px" color="secondary" />
                        </ListItemIcon>
                        <Typography color="secondary">Odjavi se</Typography>
                      </MenuItem>
                    </Box>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <ChangePasswordModal
        onOpen={openPasswordModal}
        closeModal={() => setOpenPasswordModal(false)}
      />
    </div>
  );
}

export default ToogleMenu;