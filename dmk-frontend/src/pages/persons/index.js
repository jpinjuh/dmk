// React
import React, { useState } from 'react';

// Organisms
import Table from 'Components/organisms/persons/Table';
import SearchForm from 'Components/organisms/persons/SearchForm';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Persons = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MainTemplate
        Form={<SearchForm />}
        dataTable={<Table open={open} setOpen={setOpen}/>}
      >
      </MainTemplate>
    </>
  );
};

export default Persons;
