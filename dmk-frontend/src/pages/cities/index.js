// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/cities/AddForm';
import DataTable from 'Components/organisms/cities/DataTable';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Cities = () => {
  return (
    <>
      <MainTemplate
        Form={<AddForm />}
        dataTable={<DataTable />}
      ></MainTemplate>
    </>
  );
};

export default Cities;
