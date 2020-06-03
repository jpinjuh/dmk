// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/archdioceses/AddForm';
import DataTable from 'Components/organisms/archdioceses/DataTable';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Archdioceses = () => {
  return (
    <>
      <MainTemplate
        Form={<AddForm />}
        dataTable={<DataTable />}
      ></MainTemplate>
    </>
  );
};

export default Archdioceses;
