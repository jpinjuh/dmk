// React
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

// date util library
import DateFnsUtils from '@date-io/date-fns';
import hrLocale from "date-fns/locale/hr";


const useStyles = makeStyles(theme => ({
  input:{
      color: `${theme.palette.secondary.main} !important`
  }
}));


const Timepicker = props => {
  const classes = useStyles();

  const {
    value,
    label,
    validation,
    error,
    onChange,
    required,
    disabled,
    color
  } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={hrLocale}>
        <DatePicker 
            //autoOk
            inputVariant="outlined"
            fullWidth
            margin="normal"
            value={value}
            label={label}
            error={error}
            helperText={validation}
            format="dd/MM/yyyy"
            onChange={date => onChange(date)}
            InputProps={{
                classes: {
                  root: classes.input,
                },
            }}
            InputLabelProps={{style:
                {
                  fontSize: 14,
                  lineHeight: 0
                }
              }}
        />
    </MuiPickersUtilsProvider>
  );
};



export default Timepicker;
