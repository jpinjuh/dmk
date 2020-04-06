// React
import React from "react";

// MUI
import IconMUI from "@material-ui/core/Icon";

const Icon = props => {
  const { icon, size, color } = props;
  return (
    <IconMUI style={{ fontSize: size }} color={color}>
      {icon}
    </IconMUI>
  );
};

Icon.defaultProps = {
  icon: "menu",
  size: "4rem",
  color: "primary"
};

export default Icon;
