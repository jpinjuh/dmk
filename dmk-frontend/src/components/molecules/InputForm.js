// React
import React from "react";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

// Atoms
import Input from "Components/atoms/inputs/Input";
import Autocomplete from "Components/atoms/inputs/Autocomplete";
import Dropdown from "../atoms/inputs/Dropdown";
import Timepicker from "../atoms/inputs/Timepicker";

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
  },
}));

const InputForm = props => {
  const { inputs, setInputs, cols, spacing, validation } = props;
  const classes = useStyles();

  const handleInputChange = index => value => {
    const tempInputs = [...inputs];
    console.log(tempInputs)
    tempInputs[index].value = value;

    setInputs(tempInputs);
  };

  return (

    <Grid container alignItems="center" spacing={spacing}>
      {inputs.map((input, index) => {
        switch (input.type) {
          case 'dropdown':
            return <Grid item xs={cols || 12} key={input.name_in_db}>
              <Container className={classes.container}>
                <Dropdown
                  service={input.service}
                  label={input.label}
                  value={input.value}
                  validation={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db] && validation.message.description[input.name_in_db]._schema}
                  error={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db] && validation.message.description[input.name_in_db]._schema}
                  setParentState={handleInputChange(index)}
                />
              </Container>
            </Grid>;
          case 'autocomplete':
            return <Grid item xs={cols || 12} key={input.name_in_db}>
              <Container className={classes.container}>
                <Autocomplete
                  service={input.service}
                  label={input.label}
                  value={input.value}
                  validation={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db] && validation.message.description[input.name_in_db]._schema}
                  error={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db] && validation.message.description[input.name_in_db]._schema}
                  setParentState={handleInputChange(index)}
                />
              </Container>
            </Grid>;
          case 'date':
            return <Grid item xs={cols || 12} key={input.name_in_db}>
              <Container className={classes.container}>
                <Timepicker
                  type={input.type}
                  value={input.value}
                  disabled={input.disabled}
                  onChange={handleInputChange(index)}
                  label={input.label}
                  validation={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db]}
                  error={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db]}
                />
              </Container>
            </Grid>;
          default:
            return <Grid item xs={cols || 12} key={input.name_in_db}>
              <Container className={classes.container}>
                <Input
                  type={input.type}
                  value={input.value}
                  disabled={input.disabled}
                  onChange={handleInputChange(index)}
                  label={input.label}
                  validation={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db]}
                  error={validation && validation.message && validation.message.description && validation.message.description[input.name_in_db]}
                />
              </Container>
            </Grid>;
        }
      }
      )}
    </Grid>
  );
};

export default InputForm;
