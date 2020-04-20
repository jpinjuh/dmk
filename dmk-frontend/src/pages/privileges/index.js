// React
import React, { useState } from 'react';

// Organisms
import AddPrivilegesForm from 'Components/organisms/AddPrivilegesForm';
import DataTable from 'Components/organisms/DataTable';
import Privilege from './model/privilege';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Privileges = () => {
  const selector = 'privilegije'
  return (
    <>
      <AdminTemplate
        addForm={<AddPrivilegesForm />}
        dataTable={<DataTable title={'Popis privilegija'} selector={selector} model={Privilege}/>}
      ></AdminTemplate>
    </>
  );
};

export default Privileges;
