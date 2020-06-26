// React
import React, { useState, useEffect } from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


// Services
import { getFunc } from "../../../services/mainApiServices";

const useStyles = makeStyles(theme => ({
  input: {
    color: `${theme.palette.secondary.main} !important`,
    marginBottom: '8px'
  }
}));


const Dropdown = props => {

  const classes = useStyles();

  const {
    value,
    label,
    validation,
    service,
    setParentState,
    error,
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
      {options.data && (
        <FormControl fullWidth error={!!error}>
          <InputLabel style={{ position: "unset", paddingLeft: "15px", fontSize: "14px", lineHeight: "0.8" }} htmlFor={label}>{label}</InputLabel>
            <Select
              error={!!error}
              variant="outlined"
              id={label}
              value={item}
              onChange={handleChange}
              className={classes.input}
            >
              
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
      )}
    </>
  )
}


export default Dropdown