// React
import React from "react";
import { useTranslation } from "react-i18next";

// MUI
import TextField from "@material-ui/core/TextField";

const Input = props => {
  const { t } = useTranslation();

  const {
    type,
    value,
    label,
    validation,
    onChange,
    required,
    disabled
  } = props;

  return (
    <TextField
      variant="outlined"
      fullWidth
      margin="normal"
      disabled={disabled}
      type={type}
      label={t(label)}
      value={value}
      required={required}
      error={validation}
      helperText={validation}
      onChange={e => onChange(e.currentTarget.value)}
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
  disabled: false
};

export default Input;
