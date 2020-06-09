// React
import React, {useState} from 'react';

// Organisms
import AddForm from 'Components/organisms/roles/AddForm';
import Table from 'Components/organisms/roles/Table';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Roles = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MainTemplate
        Form={<AddForm open={open} setOpen={setOpen} />}
        dataTable={<Table open={open} setOpen={setOpen} />}
      ></MainTemplate>
    </>
  );
};

export default Roles;
