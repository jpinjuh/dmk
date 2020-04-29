// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/roles/AddForm';
import DataTable from 'Components/organisms/roles/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Roles = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddForm />}
        dataTable={<DataTable />}
      ></AdminTemplate>
    </>
  );
};

export default Roles;
