// React
import React from 'react';

// Organisms
import ModeratorDataTable from 'Components/organisms/persons/ModeratorDataTable';
import SearchForm from 'Components/organisms/persons/SearchForm';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Persons = () => {
  return (
    <>
      <MainTemplate
        Form={<SearchForm />}
        dataTable={<ModeratorDataTable />}
      >
      </MainTemplate>
    </>
  );
};

export default Persons;
