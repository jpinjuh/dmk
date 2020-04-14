// React
import React, { useState } from 'react';

// Organisms
import AddPrivilegesForm from 'Components/organisms/AddPrivilegesForm';
import DataTable from 'Components/organisms/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Roles = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddPrivilegesForm />}
        dataTable={<DataTable title={'Popis privilegija'}/>}
      ></AdminTemplate>
    </>
  );
};

export default Roles;
