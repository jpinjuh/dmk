// React
import React from 'react';

// Organisms
import Table from 'Components/organisms/baptized/Table';
import SearchForm from 'Components/organisms/persons/SearchForm';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Baptized = () => {
  return (
    <>
      <MainTemplate
        searchForm={<SearchForm />}
        dataTable={<Table />}
      >
      </MainTemplate>
    </>
  );
};

export default Baptized;
