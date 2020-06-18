// React
import React, { useState } from 'react';

// Organisms
import AddForm from 'Components/organisms/deceased/AddForm';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Baptized = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MainTemplate
        Form={<AddForm open={open} setOpen={setOpen}/>}
      >
      </MainTemplate>
    </>
  );
};

export default Baptized;
