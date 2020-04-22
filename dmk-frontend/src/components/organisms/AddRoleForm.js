// React
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

// MUI
import { Box } from "@material-ui/core";

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Molecules
import InputForm from "Components/molecules/InputForm"

// Actions
import { postData as postRoles } from "Modules/units/Roles";
import { postData as postPrivileges } from "Modules/units/Privileges";
import { postData as postPermissions } from "Modules/units/Permissions";
import { postData as postCities } from "Modules/units/Cities";
import { postData as postDistricts } from "Modules/units/Districts";
import { postData as postStates } from "Modules/units/States";

// Models
import { RoleForm } from 'Pages/roles/model/role'
import { PrivilegeForm } from 'Pages/privileges/model/privilege'
import { CitiesForm } from 'Pages/cities/model/city'
import { PermissionForm } from '../../pages/permissions/model/permission';
import { StateForm } from '../../pages/states/model/state';
import { DistrictForm } from '../../pages/districts/model/district';

let requiredInputs = [], postAction;

const AddRoleForm = ({ selector, title }) => {

  switch (selector) {
    case 'role':
      requiredInputs = RoleForm;
      postAction = postRoles;
      break;
    case 'privilege':
      requiredInputs = PrivilegeForm;
      postAction = postPrivileges;
      break;
    case 'permission':
      requiredInputs = PermissionForm;
      postAction = postPermissions;
      break;
    case 'city':
      requiredInputs = CitiesForm;
      postAction = postCities;
      break;
    case 'district':
      requiredInputs = DistrictForm;
      postAction = postDistricts;
      break;
    case 'state':
      requiredInputs = StateForm;
      postAction = postStates;
      break;
    default:
      console.log("Not working!");
  }

  const [inputs, setInputs] = useState(requiredInputs);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const body = {};
    inputs.forEach(input => {
      body[input.name_in_db] = input.value.hasOwnProperty('id') ? { id: input.value['id'] } : input.value;
    })

    console.log(body)
    dispatch(postAction(selector, body))
  };

  return (
    <>
      <Box mb={3}>
        <Title
          variant="h5"
          align={'left'}
          title={title}
        />
      </Box>
      <form>
        <InputForm
          inputs={inputs}
          setInputs={setInputs}
        />
        <Box mt={2}>
          <Button
            label={`+ ${title}`}
            type={"submit"}
            onClick={handleSubmit} />
        </Box>
      </form>
    </>
  );
};

export default AddRoleForm;
