// React
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// MUI
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
  title: {
    backgroundColor: '#dcdeef',
    padding: '8px 8px 8px 24px'
  }
}));

const SearchForm = () => {
  const classes = style();
  const theme = useTheme();
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
            <InputForm inputs={inputs} setInputs={setInputs} cols={useMediaQuery(theme.breakpoints.up('sm')) ? 4 : 12} spacing={2}></InputForm>
            <Grid item xs={useMediaQuery(theme.breakpoints.up('sm')) ? 4 : 12}>
              <Box mt={3} mb={2} pr={1}>
                <Button
                  label="Pretraži"
                  onClick={searchFunc}
                  fullWidth={true}
                />
              </Box>
            </Grid>
                
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