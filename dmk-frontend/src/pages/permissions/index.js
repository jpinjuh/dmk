// React
import React, { useState } from 'react';

// Organisms
import AddPermissionForm from 'Components/organisms/AddPermissionForm';
import DataTable from 'Components/organisms/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddPermissionForm />}
        dataTable={<DataTable title={'Popis prava'}/>}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
