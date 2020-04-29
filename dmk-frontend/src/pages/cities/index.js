// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/cities/AddForm';
import DataTable from 'Components/organisms/cities/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const States = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddForm />}
        dataTable={<DataTable />}
      ></AdminTemplate>
    </>
  );
};

export default States;
