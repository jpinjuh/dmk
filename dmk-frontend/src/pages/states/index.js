// React
import React, {useState} from 'react';

// Organisms
import AddForm from 'Components/organisms/states/AddForm';
import Table from 'Components/organisms/states/Table';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const States = () => {
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

export default States;
