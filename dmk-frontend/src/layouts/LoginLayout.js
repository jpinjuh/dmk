// React, Redux, Router
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Material-UI
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from 'Components/atoms/UI/Title'

// Molecules 
import InputForm from "Components/molecules/InputForm"

// Layout Components
import Header from "Layouts/sections/Header";

// Actions
import { login } from "Modules/units/Auth";

const style = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignSelf: 'center'
  }
}));

const requiredInputs = [
  {
    label: 'Korisničko ime',
    type: 'text',
    disabled: false,
    name_in_db: 'username',
    validation: null,
    error: false
  },
  {
    label: 'Lozinka',
    type: 'password',
    disabled: false,
    name_in_db: 'password',
    validation: null,
    error: false
  }
]

const LoginLayout = () => {
  const [inputs, setInputs] = useState(requiredInputs);

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = style();
  const validation = useSelector(state => state.validation);


  const clearInputs = () => {
    setInputs(inputs.map(input => ({
      label: input.label,
      type: input.type,
      disabled: false,
      name_in_db: input.name_in_db,
      validation: null,
      error: false,
      value: ""
    })));
  }

  const addItem = e => {
    e.preventDefault();

    const body = {};

    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
    })

    dispatch(login(`login`, body, history, clearInputs));
  };

  return (
    <>
      <Header />
      <Container maxWidth="xs" className={classes.container}>
        <Box mb={5}>
          <Title 
            variant="h3" 
            align={'center'} 
            title="Prijava"
          />
        </Box>
        <form>
          <InputForm inputs={inputs} setInputs={setInputs} xs={12} md={12} lg={12} validation={validation}></InputForm>
          <Box mt={3}>
            <Button
              label="Prijavi se"
              type="submit"
              onClick={addItem}
              fullWidth
            />
          </Box>
        </form>
       
      </Container>
    </>
  );
};

export default LoginLayout;
