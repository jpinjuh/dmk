// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/roles/AddForm';
import DataTable from 'Components/organisms/roles/DataTable';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Roles = () => {
  return (
    <>
      <MainTemplate
        Form={<AddForm />}
        dataTable={<DataTable />}
      ></MainTemplate>
    </>
  );
};

export default Roles;
