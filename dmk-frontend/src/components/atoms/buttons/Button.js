// React
import React from "react";

// MUI
import ButtonMUI from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Router
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: '56px',
    fontSize: '18px',
    borderRadius: '7px',
  },
}));

const Button = props => {
  const classes = useStyles();
  const history = useHistory();

  const { variant, label, onClick, color, goTo, fullWidth, type } = props;

  return (
    <ButtonMUI
      variant={variant}
      onClick={goTo ? () => history.push(goTo) : onClick}   
      fullWidth={fullWidth}
      color={color}
      type={type}
      className={classes.root}
      disableElevation
    >
      {label}
    </ButtonMUI>
  );
};

Button.defaultProps = {
  variant: "contained",
  label: "Label",
  color: 'primary',
  onClick: () => console.log("Ouch!"),
  goTo: "",
  fullWidth: false,
  type: "button"
};

export default Button;
