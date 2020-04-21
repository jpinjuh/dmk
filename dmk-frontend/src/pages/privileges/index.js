// React
import React, { useState } from 'react';

// Organisms
import AddRoleForm from 'Components/organisms/AddRoleForm';
import DataTable from 'Components/organisms/DataTable';

// models
import { PrivilegeTableData } from 'Pages/privileges/model/privilege'

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Privileges = () => {
  const selector = 'privilege'
  return (
    <>
      <AdminTemplate
        addForm={<AddRoleForm  selector={selector} title={'Dodaj privilegiju'} />}
        dataTable={<DataTable title={'Popis privilegija'} selector={selector} model={PrivilegeTableData}/>}
      ></AdminTemplate>
    </>
  );
};

export default Privileges;
