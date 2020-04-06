// React
import React from "react";
import { useTranslation } from "react-i18next";

// MUI
import ButtonMUI from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
// import { makeStyles } from "@material-ui/core/styles";

// Router
import { useHistory } from "react-router-dom";

// const useStyles = makeStyles(theme => ({}));

const Button = props => {
  // const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const { variant, label, onClick, color, goTo, icon, fullWidth, type } = props;

  return (
    <ButtonMUI
      variant={variant}
      color={color}
      onClick={goTo ? () => history.push(goTo) : onClick}
      endIcon={<Icon>{icon}</Icon>}
      fullWidth={fullWidth}
      type={type}
    >
      {t(label)}
    </ButtonMUI>
  );
};

Button.defaultProps = {
  variant: "contained",
  label: "Label",
  onClick: () => console.log("Ouch!"),
  color: "primary",
  goTo: "",
  icon: "mood",
  fullWidth: false,
  type: "button"
};

export default Button;
