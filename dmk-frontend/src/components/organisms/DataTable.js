// React
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData as getRoles } from "Modules/units/Roles";
import { getData as getStates} from "Modules/units/States";
import { useHistory, useLocation } from "react-router-dom";
// MUI
import Box from "@material-ui/core/Box";

// Atoms
import Title from 'Components/atoms/UI/Title'

// Molecules
import Table from "Components/molecules/Table"

const DataTable = ({title, selector, model}) => {
  const dispatch = useDispatch();
  const location = useLocation();

  //if(selector === location.pathname)
  const roles = useSelector(state => state.roles);

  switch(selector) {
    case '/role':
      useEffect(() => {
        dispatch(getRoles())
      }, [])
      break;
    case '/drzave':
      useEffect(() => {
        dispatch(getStates())
      }, [])
      break;
    default:
      console.log("not working")
  }
  
  

  /*useEffect(() => {
    
  }, []);*/
  /*if(roles.data)
  console.log(Object.keys(roles.data[0]).filter(value => !["id", "status", "created_at", "updated_at"].includes(value)))*/
  return (
    <>
      <Box mb={7}>
        <Title 
          variant="h4" 
          align={'left'} 
          title={title}
        />
      </Box>
      <Table data={roles} model={model}></Table>
    </>
  );
};

export default DataTable;
