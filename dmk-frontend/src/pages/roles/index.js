// React
import React, { useState } from 'react';

// Organisms
import AddRoleForm from 'Components/organisms/AddRoleForm';
import DataTable from 'Components/organisms/DataTable';
import { RoleTableData } from 'Pages/roles/model/role'

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Roles = () => {

  const selector = 'role'
  return (
    <>
      <AdminTemplate
        addForm={<AddRoleForm selector={selector} title={'Dodaj rolu'} />}
        dataTable={<DataTable title={'Popis rola'} selector={selector} model={RoleTableData} />}
      ></AdminTemplate>
    </>
  );
};

export default Roles;
