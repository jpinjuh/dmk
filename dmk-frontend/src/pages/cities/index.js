// React
import React, {useState} from 'react';

// Organisms
import AddForm from 'Components/organisms/cities/AddForm';
import Table from 'Components/organisms/cities/Table';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Cities = () => {
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

export default Cities;
