// React
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';


// Services
import { getFunc } from "../../../services/mainApiServices";

const useStyles = makeStyles(theme => ({
  input: {
    color: `${theme.palette.secondary.main} !important`,
    marginTop: '8px'
  }
}));


const Dropdown = props => {

  const classes = useStyles();

  const {
    value,
    label,
    validation,
    required,
    service,
    setParentState,
    error,
    charsToTrigger,
    disabled
  } = props;

  const [item, setItem] = useState(value ? value : '');
  const [options, setOptions] = useState([]);
  

  useEffect(() => {
    getFunc(service).then(data => {
      setOptions(data)
    })
  }, [])

  
  useEffect(() => {
    setParentState(
      (label === 'Metoda' || label === 'Groblje' || label === 'Titula') ? item : { id: item }
    )
  }, [item])

  const handleChange = event => {
    setItem(event.target.value);
  };

  return (
    <>
      {options.data &&
      <FormControl fullWidth error={!!error}>
        <Select
          error={!!error}
          displayEmpty
          variant="outlined"
          value={item}
          onChange={handleChange}
          className={classes.input}
          input={<OutlinedInput
            id={service}
            required={required}
          />}
        >
          <MenuItem disabled selected value="">
            {label}
          </MenuItem>
          {options.data.map(name => (
            <MenuItem
              key={name.id || name.list_id}
              value={(label === 'Metoda' || label === 'Groblje' || label === 'Titula') ? name.value : name.id}
            >
              {name.name || name.value} 
            </MenuItem>
          ))}
        </Select>
        {!!error &&
        <FormHelperText>{validation}</FormHelperText>}
        </FormControl>
      }
    </>
  )
}

/*Dropdown.defaultProps = {
    autoWidth = false,
    displayEmpty = true
  };*/

export default Dropdown