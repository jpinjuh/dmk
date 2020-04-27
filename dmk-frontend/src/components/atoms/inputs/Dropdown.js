// React
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// MUI
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from '@material-ui/core/OutlinedInput';


// Services
import { getFunc } from "../../../services/mainApiServices";

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

  /*const getData = async service => {

    const response = await getFunc(service);
    setOptions(response.data);
  };*/

  useEffect(() => {
    if (service !== 'methods') {
      getFunc(service).then(data => {
        setOptions(data)
      })
    }
    else {
      console.log(methods)
      setOptions(methods)
    }

  }, [options])

  const handleChange = event => {
    console.log(event.target.value)
    setItem(event.target.value);

    if(service !== 'methods')
    setParentState({
      id: event.target.value
    })
    else
    setParentState(event.target.value)
  };
  return (
    <>
      {options.data &&
        <Select
          native
          displayEmpty
          variant="outlined"
          fullWidth
          value={item}
          onChange={handleChange}

          //inputProps={{ 'aria-label': 'Without label' }}
          input={<OutlinedInput
            required={required}
            error={validation} />}
        /*renderValue={selected => {
          if (selected.length === 0) {
            return <em>Placeholder</em>;
          }
  
          return selected.join(", ");
        }}*/
        //MenuProps={MenuProps}
        >
          <option disabled value="">
            {label}
          </option>
          {options.data.map(name => (
            <option
              key={name.id}
              value={name.id}
            // style={getStyles(name, this)}
            >
              {name.name}
            </option>
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
