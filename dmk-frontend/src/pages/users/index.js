// React
import React from 'react';

// Organisms
import Table from 'Components/organisms/users/Table';

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const Users = () => {
  return (
    <>
      <MainTemplate
        dataTable={<Table />}>
      </MainTemplate>
    </>
  );
};

export default Users;
