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

// Models
import { SearchForm as searchForm } from 'Pages/persons/model/person'

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
  const [inputs, setInputs] = useState(searchForm);
  const dispatch = useDispatch();
  const tableData = useSelector(state => state.users);

  const searchFunc = e => {
    e.preventDefault();

    const body = {};

    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
    })
   
    dispatch(searchData(`person/search`, body));
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
            <InputForm inputs={inputs} setInputs={setInputs} cols={4} spacing={2}></InputForm>
                <Box mt={3} mb={2}>
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
          {
            tableData.loading &&
            <LinearProgress />
          }
          </Box>
        
        </Box>
      
    </>
  )
}

export default SearchForm;