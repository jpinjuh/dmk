// React
import React from "react";

// MUI
import Grid from "@material-ui/core/Grid";

// Atoms
import Input from "Components/atoms/inputs/Input";
import Autocomplete from "Components/atoms/inputs/Autocomplete";

const InputForm = props => {
  const { inputs, setInputs } = props;

  const handleInputChange = index => value => {
    const tempInputs = [...inputs];
    console.log(tempInputs)
    tempInputs[index].value = value;

    setInputs(tempInputs);
  };

  return (
    <Grid container spacing={2}>
      {inputs.map((input, index) =>
        input.type === "autocomplete" ? (
          <Grid item xs={12} md={6} key={input.name_in_db}>
            <Autocomplete
              service={input.service}
              label={input.label}
              value={input.value}
              setParentState={handleInputChange(index)}
            />
          </Grid>
        ) : (
          <Grid item xs={12} md={6} key={input.name_in_db}>
            <Input
              type={input.type}
              value={input.value}
              disabled={input.disabled}
              onChange={handleInputChange(index)}
              label={input.label}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default InputForm;
