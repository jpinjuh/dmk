// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/privileges/AddForm';
import DataTable from 'Components/organisms/privileges/DataTable';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Privileges = () => {
  return (
    <>
      <MainTemplate
        Form={<AddForm />}
        dataTable={<DataTable />}
      ></MainTemplate>
    </>
  );
};

export default Privileges;
