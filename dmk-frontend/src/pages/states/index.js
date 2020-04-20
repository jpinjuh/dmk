// React
import React, { useState } from 'react';

// Organisms
import AddStateForm from 'Components/organisms/AddStateForm';
import DataTable from 'Components/organisms/DataTable';
import State from 'Pages/states/model/state'

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const States = () => {

  const selector = 'drzave'
  return (
    <>
      <AdminTemplate
        addForm={<AddStateForm />}
        dataTable={<DataTable title={'Popis država'} selector={selector} model={State} />}
      ></AdminTemplate>
    </>
  );
};

export default States;
