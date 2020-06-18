// React
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  input:{
      color: `${theme.palette.secondary.main} !important`,
      height: '80px !important',
      //marginTop: '24px !important'
  }
}));

const Multiline = props => {

  const classes = useStyles();

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
      multiline
      rows={4}
      disabled={disabled}
      type="text"
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
        }
      }}
      InputLabelProps={{style:
        {
          //marginTop: 24,
          fontSize: 14,
          lineHeight: 0
        }
      }}
    />
  );
};

Multiline.defaultProps = {
  label: "Label",
  type: "text",
  value: "",
  error: false,
  helperText: "",
  required: false,
  disabled: false,
  color: "primary",
};

export default Multiline;
