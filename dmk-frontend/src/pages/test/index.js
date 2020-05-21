// React
import React from 'react';

// Organisms
import ModeratorDataTable from 'Components/organisms/test/ModeratorDataTable';
import SearchForm from 'Components/organisms/roles/SearchForm';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Test = () => {
  return (
    <>
      <MainTemplate
        searchForm={<SearchForm />}
        dataTable={<ModeratorDataTable />}
      >
      </MainTemplate>
    </>
  );
};

export default Test;
