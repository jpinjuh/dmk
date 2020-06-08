// React
import React from 'react';
import { useHistory } from "react-router-dom";

// Organisms
import PersonDetailsComp from 'Components/organisms/persons/PersonDetails';

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";

// Templates
import MainTemplate from 'Components/templates/MainTemplate'

const PersonDetails = () => {
  const history = useHistory();
  return (
    <>
      <MainTemplate
        Form={<PersonDetailsComp />}
        backBtn={<ButtonWithIcon label="Natrag" icon={'arrow_back_ios'} size="24px" onClick={() => history.goBack()}/>}
      >
      </MainTemplate>
    </>
  );
};

export default PersonDetails;
