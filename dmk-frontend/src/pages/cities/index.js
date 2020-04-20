// React
import React, { useState } from 'react';

// Organisms
import AddCityForm from 'Components/organisms/AddCityForm';
import DataTable from 'Components/organisms/DataTable';
import City from 'Pages/cities/model/city'

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  const selector = 'gradovi'
  return (
    <>
      <AdminTemplate
        addForm={<AddCityForm />}
        dataTable={<DataTable title={'Popis gradova'} selector={selector} model={City}/>}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
