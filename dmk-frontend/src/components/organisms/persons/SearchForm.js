// React
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";

// MUI
import { Box, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Molecules
import InputForm from "Components/molecules/InputForm"

// Action
import { searchData } from "Modules/units/Roles";

const style = makeStyles(theme => ({
  input: {
    height: '36px !important',
    //fontSize: '13px !important'
  },
  title: {
    backgroundColor: '#dcdeef',
    padding: '8px 8px 8px 24px'
  }
}));

const SearchForm = () => {
  const classes = style();
  const [data, setData] = useState('')
  const dispatch = useDispatch();
  const tableData = useSelector(state => state.users);

  const searchFunc = () => {
    const body = {
      search: data
    };

    dispatch(searchData('user/search', body))
  };

  return (
    <>
      <Box>
          <Box className={classes.title}>
            <Title
              variant="h6"
              align={'left'}
              title={'Pretraživanje'}
            />
          </Box>
          <Box mx={3} mt={4}>
            <form>
                  <TextField
                  InputProps={{
                    classes: {
                      root: classes.input,
                    },
                  }}
                  InputLabelProps={{
                    style:
                    {
                      fontSize: 14,
                      lineHeight: 0.05
                    }
                  }}
                  label="Naziv"
                  variant="outlined"
                  value={data}
                  onChange={e => setData(e.currentTarget.value)}
                />
                <Box mt={3}>
                  <Button
                    InputProps={{
                      classes: {
                        root: classes.input,
                      },
                    }}
                    label="Pretraži"
                    onClick={searchFunc}
                  />
                </Box>
            </form>
          </Box>
        </Box>
      {
        tableData.loading &&
        <LinearProgress />
      }
    </>
  )
}

export default SearchForm;