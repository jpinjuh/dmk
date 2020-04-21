// React
import React, { useState } from 'react';

// Organisms
import AddRoleForm from 'Components/organisms/AddRoleForm';
import DataTable from 'Components/organisms/DataTable';

// Models
import { DistrictTableData } from 'Pages/districts/model/district'

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  const selector = 'district'
  return (
    <>
      <AdminTemplate
        addForm={<AddRoleForm selector={selector} title={'Dodaj župu'} />}
        dataTable={<DataTable title={'Popis župa'} selector={selector} model={DistrictTableData}/>}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
