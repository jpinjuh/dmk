// React
import React, { useState } from 'react';

// Organisms
import AddCityForm from 'Components/organisms/AddCityForm';
import DataTable from 'Components/organisms/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddCityForm />}
        dataTable={<DataTable title={'Popis gradova'}/>}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
