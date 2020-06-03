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

export const formatDate = date => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

export const formatLocalDate = date => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [day, month, year].join('-');
}

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
            disableFuture
            inputVariant="outlined"
            fullWidth
            margin="normal"
            okLabel="U redu"
            cancelLabel="Nazad"
            value={value}
            label={label}
            error={error}
            helperText={validation}
            format="dd-MM-yyyy"
            onChange={date => {
              Date.parse(date) ? onChange(formatDate(date)) : onChange(null);
            }}
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