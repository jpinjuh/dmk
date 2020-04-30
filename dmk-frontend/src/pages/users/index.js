// React
import React from 'react';

// Organisms
import ModeratorDataTable from 'Components/organisms/users/ModeratorDataTable';

// Templates
import ModeratorTemplate from 'Components/templates/ModeratorTemplate'

const Users = () => {
  return (
    <>
      <ModeratorTemplate
        moderatorDataTable={<ModeratorDataTable />}>
      </ModeratorTemplate>
    </>
  );
};

export default Users;
