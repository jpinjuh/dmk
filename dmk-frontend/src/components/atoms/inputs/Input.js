// React
import React, { useState } from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TogglePassword from "../buttons/TogglePassword";

const useStyles = makeStyles(theme => ({
  input:{
      color: `${theme.palette.secondary.main} !important`
  }
}));

const Input = props => {

  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(type==='password' ? true : false)

  const {
    type,
    value,
    label,
    validation,
    error,
    onChange,
    required,
    disabled,
    color
  } = props;


  return (
    <TextField
      variant="outlined"
      fullWidth
      margin="normal"
      disabled={disabled}
      type={type === 'password' ? (showPassword ? 'password' : 'text') : type }
      label={label}
      value={value}
      color={color}
      required={required}
      error={!!error}
      helperText={validation}
      onChange={e => onChange(e.currentTarget.value)}
      className={classes.root}
      InputProps={{
        classes: {
          root: classes.input,
        },
       endAdornment: type==='password' ? (
            <TogglePassword setShowPassword={setShowPassword} />
          )
          :
          null
        
      }}
      InputLabelProps={{style:
        {
          fontSize: 14,
          lineHeight: 0
        }
      }}
    />
  );
};

Input.defaultProps = {
  label: "Label",
  type: "text",
  value: "",
  error: false,
  helperText: "",
  required: false,
  disabled: false,
  color: "primary",
};

export default Input;
