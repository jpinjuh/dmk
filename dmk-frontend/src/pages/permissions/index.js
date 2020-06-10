// React
import React, {useState} from 'react';

// Organisms
import AddForm from 'Components/organisms/permissions/AddForm';
import Table from 'Components/organisms/permissions/Table';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Permissions = () => {
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

export default Permissions;
