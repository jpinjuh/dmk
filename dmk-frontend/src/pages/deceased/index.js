// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/deceased/AddForm';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Baptized = () => {
  return (
    <>
      <MainTemplate
        Form={<AddForm />}
      >
      </MainTemplate>
    </>
  );
};

export default Baptized;
