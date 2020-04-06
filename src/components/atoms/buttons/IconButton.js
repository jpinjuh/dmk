// React
import React from "react";

// MUI
import IconButtonMUI from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const IconButton = props => {
  const { onClick, color, icon } = props;

  return (
    <IconButtonMUI
      color={color}
      onClick={e => {
        onClick(e);
      }}
    >
      <Icon>{icon}</Icon>
    </IconButtonMUI>
  );
};

IconButton.defaultProps = {
  onClick: () => console.log("Clicked!"),
  color: "primary",
  icon: "mood"
};

export default IconButton;
