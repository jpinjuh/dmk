// React
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";

// Image
import logoLight from "Assets/images/logo_light.png";
import logoDark from "Assets/images/logo_dark.png";

const style = makeStyles(() => ({
  logo: { verticalAlign: "middle" }
}));

const Logo = props => {
  const classes = style();

  const { type, width, goTo } = props;

  switch (type) {
    case "light":
      return (
        <a href={goTo}>
          <img
            alt="logo"
            src={logoLight}
            className={classes.logo}
            style={{ width }}
          />
        </a>
      );

    case "dark":
      return (
        <a href={goTo}>
          <img
            alt="logo"
            src={logoDark}
            className={classes.logo}
            style={{ width }}
          />
        </a>
      );

    default:
      return (
        <a href={goTo}>
          <img
            alt="logo"
            src={logoDark}
            className={classes.logo}
            style={{ width }}
          />
        </a>
      );
  }
};

Logo.defaultProps = {
  width: "100%",
  goTo: "/"
};

export default Logo;
