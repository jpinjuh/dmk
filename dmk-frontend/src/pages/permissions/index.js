// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/permissions/AddForm';
import DataTable from 'Components/organisms/permissions/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Permissions = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddForm />}
        dataTable={<DataTable />}
      ></AdminTemplate>
    </>
  );
};

export default Permissions;
