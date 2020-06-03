// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/permissions/AddForm';
import DataTable from 'Components/organisms/permissions/DataTable';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Permissions = () => {
  return (
    <>
      <MainTemplate
        Form={<AddForm />}
        dataTable={<DataTable />}
      ></MainTemplate>
    </>
  );
};

export default Permissions;
