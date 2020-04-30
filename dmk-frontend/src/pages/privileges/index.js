// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/privileges/AddForm';
import DataTable from 'Components/organisms/privileges/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Privileges = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddForm />}
        dataTable={<DataTable />}
      ></AdminTemplate>
    </>
  );
};

export default Privileges;
