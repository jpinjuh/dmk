// React
import React from "react";

// MUI
import ListItemMUI from "@material-ui/core/ListItem";
import {
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Icon
} from "@material-ui/core";

const ListItem = props => {
  const {
    primaryLabel,
    secondaryLabel,
    icon,
    disabled,
    selected,
    clickable,
    onClick,
    secondaryAction
  } = props;

  return (
    <ListItemMUI
      divider
      disabled={disabled}
      selected={selected}
      button={clickable}
      onClick={onClick}
    >
      {icon && (
        <ListItemAvatar>
          <Icon>{icon}</Icon>
        </ListItemAvatar>
      )}
      <ListItemText primary={primaryLabel} secondary={secondaryLabel} />
      {secondaryAction && (
        <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
      )}
    </ListItemMUI>
  );
};

ListItem.defaultProps = {
  primaryLabel: "Primary label",
  secondaryLabel: "",
  icon: "",
  disabled: false,
  selected: false,
  clickable: false,
  onClick: () => {
    console.log("Clicked on list item!");
  },
  secondaryAction: ""
};

export default ListItem;
