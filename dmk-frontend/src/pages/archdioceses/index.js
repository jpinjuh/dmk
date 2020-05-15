// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/archdioceses/AddForm';
import DataTable from 'Components/organisms/archdioceses/DataTable';

// Templates
import AdminTemplate from 'Components/templates/AdminTemplate'

const Archdioceses = () => {
  return (
    <>
      <AdminTemplate
        addForm={<AddForm />}
        dataTable={<DataTable />}
      ></AdminTemplate>
    </>
  );
};

export default Archdioceses;
