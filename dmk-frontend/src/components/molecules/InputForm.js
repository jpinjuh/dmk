// React
import React from "react";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

// Atoms
import Input from "Components/atoms/inputs/Input";
import Autocomplete from "Components/atoms/inputs/Autocomplete";
import Dropdown from "../atoms/inputs/Dropdown";
import Datepicker from "../atoms/inputs/Datepicker";
import Multiline from "../atoms/inputs/Multiline";

const useStyles = makeStyles(theme => ({
  
}));

const InputForm = props => {
  const { inputs, setInputs, xs, md, lg, spacing, validation } = props;
  const classes = useStyles();

  const handleInputChange = index => value => {
    const tempInputs = [...inputs];

    tempInputs[index].value = value;

    setInputs(tempInputs);
  };
  

  return (

    <Grid container alignItems="center" spacing={spacing}>
      {inputs.map((input, index) => {
        switch (input.type) {
          case 'dropdown':
            return <Grid item xs={xs || 12}  md={md || 6} lg={lg || 4} key={input.name_in_db}>
                <Dropdown
                  service={input.service}
                  label={input.label}
                  value={input.value}
                  validation={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db] && validation.message.description[input.name_in_db]._schema}
                  error={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db] && validation.message.description[input.name_in_db]._schema}
                  setParentState={handleInputChange(index)}
                />
            </Grid>;
          case 'autocomplete':
            return <Grid item xs={xs || 12}  md={md || 6} lg={lg || 4} key={input.name_in_db}>
                <Autocomplete
                  service={input.service}
                  label={input.label}
                  value={input.value}
                  validation={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db] && validation.message.description[input.name_in_db]._schema}
                  error={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db] && validation.message.description[input.name_in_db]._schema}
                  setParentState={handleInputChange(index)}
                />
            </Grid>;
          case 'date':
            return <Grid item xs={xs || 12}  md={md || 6} lg={lg || 4} key={input.name_in_db}>
                <Datepicker
                  type={input.type}
                  value={input.value}
                  disabled={input.disabled}
                  onChangeDate={handleInputChange(index)}
                  label={input.label}
                  validation={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db]}
                  error={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db]}
                />
            </Grid>;
          case 'multiline':
            return <Grid item xs={xs || 12}  md={md || 6} lg={lg || 4} key={input.name_in_db}>
                <Multiline
                  type={input.type}
                  value={input.value}
                  disabled={input.disabled}
                  onChange={handleInputChange(index)}
                  label={input.label}
                  validation={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db]}
                  error={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db]}
                />
            </Grid>;
          default:
            return <Grid item xs={xs || 12}  md={md || 6} lg={lg || 4} key={input.name_in_db}>
                <Input
                  type={input.type}
                  value={input.value}
                  disabled={input.disabled}
                  onChange={handleInputChange(index)}
                  label={input.label}
                  validation={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db]}
                  error={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db]}
                />
            </Grid>;
        }
      }
      )}
    </Grid>
  );
};

export default InputForm;
