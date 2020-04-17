// React
import React, { useState } from 'react';

// Organisms
import AddRoleForm from 'Components/organisms/AddRoleForm';
import DataTable from 'Components/organisms/DataTable';
import Role from 'Pages/roles/model/role'

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Roles = () => {

  const selector = '/role'
  console.log(Role)
  return (
    <>
      <AdminTemplate
        addForm={<AddRoleForm />}
        dataTable={<DataTable title={'Popis rola'} selector={selector} model={Role} />}
      ></AdminTemplate>
    </>
  );
};

export default Roles;
