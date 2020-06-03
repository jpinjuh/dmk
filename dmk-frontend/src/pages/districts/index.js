// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/districts/AddForm';
import DataTable from 'Components/organisms/districts/DataTable';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Districts = () => {
  return (
    <>
      <MainTemplate
        Form={<AddForm />}
        dataTable={<DataTable />}
      ></MainTemplate>
    </>
  );
};

export default Districts;
