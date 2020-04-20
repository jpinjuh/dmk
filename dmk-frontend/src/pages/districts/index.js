// React
import React, { useState } from 'react';

// Organisms
import AddCityForm from 'Components/organisms/AddCityForm';
import DataTable from 'Components/organisms/DataTable';
import District from './model/district';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  const selector = 'zupe'
  return (
    <>
      <AdminTemplate
        addForm={<AddCityForm />}
        dataTable={<DataTable title={'Popis župa'} selector={selector} model={District}/>}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
