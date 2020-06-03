// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/states/AddForm';
import DataTable from 'Components/organisms/states/DataTable';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const States = () => {
  return (
    <>
      <MainTemplate
        Form={<AddForm />}
        dataTable={<DataTable />}
      ></MainTemplate>
    </>
  );
};

export default States;
