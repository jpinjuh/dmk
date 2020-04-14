// React
import React, { useState } from 'react';

// Organisms
import AddRoleForm from 'Components/organisms/AddRoleForm';
import DataTable from 'Components/organisms/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Roles = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddRoleForm />}
        dataTable={<DataTable title={'Popis rola'}/>}
      ></AdminTemplate>
    </>
  );
};

export default Roles;
