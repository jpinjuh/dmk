// React
import React from 'react';

// Organisms
import ModeratorDataTable from 'Components/organisms/ModeratorDataTable';

// Templates
import ModeratorTemplate from 'Components/templates/ModeratorTemplate'

const Users = () => {
  return (
    <>
      <ModeratorTemplate
        moderatorDataTable={<ModeratorDataTable 
          label={'+ Dodaj korisnika'} 
          title={'Popis korisnika'}
        />}
      ></ModeratorTemplate>
    </>
  );
};

export default Users;
