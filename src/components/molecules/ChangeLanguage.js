// React
import React, { useState } from "react";

// MUI
import Popover from "@material-ui/core/Popover";

// Atoms
import IconButton from "Components/atoms/buttons/IconButton";

// Molecules
import ListItem from "Components/molecules/ListItem";

// Flags
import gbFlag from "Assets/images/flags/gb.svg";
import hrFlag from "Assets/images/flags/hr.svg";

const ChangeLanguage = props => {
  const { color } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton icon="language" color={color} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <ListItem
          icon={<img alt="langFlag" src={gbFlag} />}
          primaryLabel="English"
          selected
          clickable
        />
        <ListItem
          icon={<img alt="langFlag" src={hrFlag} />}
          primaryLabel="Croatian"
          clickable
        />
      </Popover>
    </>
  );
};

ChangeLanguage.defaultProps = {
  color: "primary"
};

export default ChangeLanguage;
