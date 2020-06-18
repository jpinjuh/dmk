// React
import React from 'react';

// Organisms
import AddForm from 'Components/organisms/chrisms/AddForm';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Chrisms = () => {
  return (
    <>
      <MainTemplate
        Form={<AddForm />}
      >
      </MainTemplate>
    </>
  );
};

export default Chrisms;
