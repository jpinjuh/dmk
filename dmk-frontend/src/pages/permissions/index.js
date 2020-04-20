// React
import React, { useState } from 'react';

// Organisms
import AddPrivilegesForm from 'Components/organisms/AddPrivilegesForm';
import DataTable from 'Components/organisms/DataTable';
import Permission from './model/permission';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Privileges = () => {
  const selector = 'prava'
  return (
    <>
      <AdminTemplate
        addForm={<AddPrivilegesForm />}
        dataTable={<DataTable title={'Popis prava'} selector={selector} model={Permission}/>}
      ></AdminTemplate>
    </>
  );
};

export default Privileges;
