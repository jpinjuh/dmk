// React
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// MUI
import AutocompleteMUI from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

// Services
import { postFunc } from "Services/mainApiServices";

const optionText = (option, valuesToDisplay) => {
  let label = "";
  const values = Object.values(option);

  if (typeof option === "object") {
    valuesToDisplay.forEach(number => {
      label += `${values[number]} `;
    });
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
    required,
    valuesToDisplay,
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
      disableOpenOnFocus
      onInputChange={e =>
        e &&
        charsToTrigger <= e.currentTarget.value.length &&
        searchFunc(e.currentTarget.value)
      }
      onChange={(e, value) =>
        setParentState({
          label: value ? optionText(value, valuesToDisplay) : "",
          id: value ? value.id : ""
        })
      }
      getOptionLabel={option =>
        option ? optionText(option, valuesToDisplay) : ""
      }
      options={options}
      value={value.label}
      disabled={disabled}
      renderInput={params => (
        <TextField
          {...params}
          label={t(label)}
          required={required}
          variant="outlined"
          fullWidth
          margin="normal"
          error={validation}
          helperText={validation}
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
  valuesToDisplay: [2],
  charsToTrigger: 1,
  disabled: false
};

export default Autocomplete;
