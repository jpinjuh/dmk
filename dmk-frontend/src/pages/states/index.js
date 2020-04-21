// React
import React, { useState } from 'react';

// Organisms
import AddRoleForm from 'Components/organisms/AddRoleForm';
import DataTable from 'Components/organisms/DataTable';

// Models
import { StateTableData } from 'Pages/states/model/state'

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  const selector = 'state'
  return (
    <>
      <AdminTemplate
        addForm={<AddRoleForm selector={selector} title={'Dodaj državu'} />}
        dataTable={<DataTable title={'Popis država'} selector={selector} model={StateTableData}/>}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
