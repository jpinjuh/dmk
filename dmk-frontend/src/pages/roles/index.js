// React
import React from 'react';

// Organisms
import AddRoleForm from 'Components/organisms/roles/AddRoleForm';
import DataTable from 'Components/organisms/roles/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Roles = () => {

  return (
    <>
      <AdminTemplate
        addForm={<AddRoleForm />}
        dataTable={<DataTable />}
      ></AdminTemplate>
    </>
  );
};

export default Roles;
