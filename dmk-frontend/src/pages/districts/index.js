// React
import React, { useState } from 'react';

// Organisms
import AddDistrictForm from 'Components/organisms/AddDistrictForm';
import DataTable from 'Components/organisms/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddDistrictForm />}
        dataTable={<DataTable title={'Popis župa'}/>}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
