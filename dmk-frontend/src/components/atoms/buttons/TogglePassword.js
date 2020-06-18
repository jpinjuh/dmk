// React
import React, { useState, useEffect, useRef } from "react";

// MUI
import { InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

// Atoms
import Icon from "Components/atoms/UI/Icon"

const TogglePassword = ({setShowPassword}) => {

  const [masked, setMasked] = useState(false)
  const isInitialMount = useRef(true);


  const togglePasswordMask = () => {
      setMasked(!masked)
  }

  useEffect(() => {
    if (isInitialMount.current) {
        isInitialMount.current = false;
     } else {
        setShowPassword(masked)
     }
  }, [masked])


  return (
      <InputAdornment position="end">
          <IconButton
              aria-label="toggle password visibility"
              onClick={togglePasswordMask}
          >
              {masked ? <Icon icon="visibility" size={12} /> : <Icon icon="visibility_off" size={12}/>}
          </IconButton>
      </InputAdornment>
  );
};


export default TogglePassword;
