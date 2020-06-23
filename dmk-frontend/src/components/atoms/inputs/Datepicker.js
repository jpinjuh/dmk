// React
import React, { useState, useEffect } from "react";

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


const Datepicker = props => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  const {
    value,
    label,
    validation,
    error,
    onChange
  } = props;

  
  useEffect(() => {
    setTimeout(
      () => {
        onChange(formatDate(selectedDate))
      }, 100
    )
  }, [selectedDate])

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={hrLocale}>
        <DatePicker 
            variant="inline"
            disableFuture
            inputVariant="outlined"
            fullWidth
            margin="normal"
            animateYearScrolling
            value={selectedDate}
            label={label}
            error={!!error}
            helperText={validation}
            format="dd-MM-yyyy"
            onChange={handleDateChange}
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



export default Datepicker;