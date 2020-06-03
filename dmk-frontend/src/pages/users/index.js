// React
import React from 'react';

// Organisms
import ModeratorDataTable from 'Components/organisms/users/ModeratorDataTable';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Users = () => {
  return (
    <>
      <MainTemplate
        dataTable={<ModeratorDataTable />}>
      </MainTemplate>
    </>
  );
};

export default Users;
