// React
import React, {useState} from 'react';

// Organisms
import AddForm from 'Components/organisms/privileges/AddForm';
import Table from 'Components/organisms/privileges/Table';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Privileges = () => {
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

export default Privileges;
