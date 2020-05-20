// React
import React, { useState, useEffect, useRef } from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
   eye: {
       //height: '10 !important'
   }
}));

const TogglePassword = ({setShowPassword}) => {
  const classes = useStyles();

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
              {masked ? <Visibility /> : <VisibilityOff />}
          </IconButton>
      </InputAdornment>
  );
};


export default TogglePassword;
