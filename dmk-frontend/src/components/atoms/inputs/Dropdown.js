// React
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from '@material-ui/core/OutlinedInput';


// Services
import { getFunc } from "../../../services/mainApiServices";

const useStyles = makeStyles(theme => ({
  input:{
      color: `${theme.palette.secondary.main} !important`,
      marginTop: '8px'
  }
}));

const methods = {
  data: [
  {
    id: "GET",
    name: "GET"
  },
  {
    id: "POST",
    name: "POST"
  },
  {
    id: "PUT",
    name: "PUT"
  },
  {
    id: "DELETE",
    name: "DELETE"
  }]
}


const Dropdown = props => {

  const classes = useStyles();

  const [item, setItem] = useState('');
  const [options, setOptions] = useState([]);
  const {
    value,
    label,
    validation,
    required,
    service,
    setParentState,
    charsToTrigger,
    disabled
  } = props;


  useEffect(() => {
      if(service !== 'methods')
      {
        getFunc(service).then(data => {
          setOptions(data)
         })
      }
      else {
        setOptions(methods)
      }
      

  }, [])

  useEffect(() => {
    if(service !== 'methods')
    setParentState({
      id: item
    })
    else
    setParentState(item)

  }, [item])

  const handleChange = event => {
    setItem(event.target.value);
  };

  
  return (
    <>
      {options.data &&
        <Select
          displayEmpty
          variant="outlined"
          fullWidth
          value={item}
          onChange={handleChange}
          className={classes.input}
          input={<OutlinedInput
            required={required}
            error={validation}
             />}
        >
          <MenuItem disabled value="">
            {label}
          </MenuItem>
          {options.data.map(name => (
            <MenuItem
              key={name.id}
              value={name.id}
            >
              {name.name}
            </MenuItem>
          ))}
        </Select>
      }
    </>
  )
}

/*Dropdown.defaultProps = {
    autoWidth = false,
    displayEmpty = true
  };*/

export default Dropdown
