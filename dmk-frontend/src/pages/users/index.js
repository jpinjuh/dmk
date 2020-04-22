// React
import React from 'react';

// Organisms
import ModeratorDataTable from 'Components/organisms/ModeratorDataTable';

// Templates
import ModeratorTemplate from 'Components/templates/ModeratorTemplate'
import { User } from './model/user';

const Users = () => {
  return (
    <>
      <ModeratorTemplate
        moderatorDataTable={<ModeratorDataTable 
          label={'+ Dodaj korisnika'} 
          title={'Popis korisnika'}
          model={User}
        />}
      ></ModeratorTemplate>
    </>
  );
};

export default Users;
