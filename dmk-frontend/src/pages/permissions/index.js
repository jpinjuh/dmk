// React
import React, { useState } from 'react';

// Organisms
import AddRoleForm from 'Components/organisms/AddRoleForm';
import DataTable from 'Components/organisms/DataTable';

// Models
import { PermissionTableData } from 'Pages/permissions/model/permission'

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  const selector = 'permission'
  return (
    <>
      <AdminTemplate
        addForm={<AddRoleForm selector={selector} title={'Dodaj pravo'} />}
        dataTable={<DataTable title={'Popis prava'} selector={selector} model={PermissionTableData}/>}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
