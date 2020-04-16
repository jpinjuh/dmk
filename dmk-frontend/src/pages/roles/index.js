// React
import React, { useState } from 'react';

// Organisms
import AddRoleForm from 'Components/organisms/AddRoleForm';
import DataTable from 'Components/organisms/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Roles = () => {

  const selector = 'roles'

  return (
    <>
      <AdminTemplate
        addForm={<AddRoleForm />}
        dataTable={<DataTable title={'Popis rola'} selector={selector}/>}
      ></AdminTemplate>
    </>
  );
};

export default Roles;
