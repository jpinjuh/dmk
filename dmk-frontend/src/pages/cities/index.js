// React
import React, { useState } from 'react';

// Organisms
import AddRoleForm from 'Components/organisms/AddRoleForm';
import DataTable from 'Components/organisms/DataTable';

// Models
import { CityTableData } from 'Pages/cities/model/city'

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  const selector = 'city'
  return (
    <>
      <AdminTemplate
        addForm={<AddRoleForm selector={selector} title={'Dodaj grad'} />}
        dataTable={<DataTable title={'Popis gradova'} selector={selector} model={CityTableData}/>}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
