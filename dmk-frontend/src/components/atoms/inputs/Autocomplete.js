// React
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// MUI
import AutocompleteMUI from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

// Services
import { postFunc } from "Services/mainApiServices";

const optionText = (option) => {
  let label = "";
  const values = Object.values(option);
  if (typeof option === "object") {
    for (let property in option) {
      label = option['name']
    }
    return label;
  }
  return option;
};

const Autocomplete = props => {
  const { t } = useTranslation();

  const [options, setOptions] = useState([]);
  const {
    value,
    label,
    validation,
    error,
    required,
    service,
    setParentState,
    charsToTrigger,
    disabled
  } = props;


  const searchFunc = async value => {
    const body = {
      search: value
    };

    const response = await postFunc(service, body);

    setOptions(response.data);
  };

  return (
    <AutocompleteMUI
      autoHighlight
      disableopenonfocus="true"
      onInputChange={e =>
        e &&
        charsToTrigger <= e.currentTarget.value.length &&
        searchFunc(e.currentTarget.value)
      }
      onChange={(e, value) => {
        setParentState({
          label: value ? optionText(value) : "",
          id: value ? value.id : ""
        })
      }}
      getOptionLabel={option =>
        option ? optionText(option) : ""
      }
      options={options}
      value={value.label ? value.label : ''}
      disabled={disabled}
      renderInput={params => (
        <TextField
          {...params}
          label={t(label)}
          required={required}
          variant="outlined"
          fullWidth
          margin="normal"
          error={error}
          helperText={validation}
          InputLabelProps={{style:
            {
              fontSize: 14,
              lineHeight: 0.5
            }
          }}
        />
      )}
    />
  );
};

Autocomplete.defaultProps = {
  label: "Label",
  type: "text",
  value: { label: "", id: "" },
  error: false,
  helperText: "",
  required: false,
  charsToTrigger: 3,
  disabled: false
};

export default Autocomplete;
