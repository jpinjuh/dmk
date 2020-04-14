// React
import React, { useState } from 'react';

// Organisms
import AddStateForm from 'Components/organisms/AddStateForm';
import DataTable from 'Components/organisms/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddStateForm />}
        dataTable={<DataTable title={'Popis država'}/>}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
