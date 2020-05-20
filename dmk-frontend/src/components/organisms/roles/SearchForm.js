// React
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";

// MUI
import { Box, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

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
    }
  }));

const SearchForm = () => {

    const classes = style();

    const [data, setData] = useState('')

    const dispatch = useDispatch();

    const searchFunc = () => {
        const body = {
          search: data
        };
    
        dispatch(searchData('role/search', body))
      };

    return (
        <div style={{width:'100%'}}>
            <Box display="flex" justifyContent="flex-start" m={1} p={1} bgcolor="background.paper">
              <Box p={1}>
                <TextField
                    InputProps={{
                        classes: {
                          root: classes.input,
                        },
                      }}
                    InputLabelProps={{style:
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
              </Box>
            </Box>
            <Box display="flex" justifyContent="flex-end" m={1} p={1} bgcolor="background.paper">
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
        </div>
    )
}

export default SearchForm;