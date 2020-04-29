// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/districts/AddForm';
import DataTable from 'Components/organisms/districts/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Districts = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddForm />}
        dataTable={<DataTable />}
      ></AdminTemplate>
    </>
  );
};

export default Districts;
