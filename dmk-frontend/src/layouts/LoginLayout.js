// React, Redux, Router
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Material-UI
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from 'Components/atoms/UI/Title'
import Link from 'Components/atoms/hyperlinks/Link'

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
  },
  {
    label: 'Lozinka',
    type: 'password',
    disabled: false,
    name_in_db: 'password',
  }
]

const LoginLayout = () => {
  const [inputs, setInputs] = useState(requiredInputs);

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = style();

  const addItem = e => {
    e.preventDefault();

    const body = {};

    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
    })

    dispatch(login(`login`, body, history));
    let clearVal = inputs.filter(input => {
      input.value = '';
      input.validation = '';
      input.error = false;
      return input;
    })
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
          <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
          <Box mt={3}>
            <Button
              label="Prijavi se"
              type="submit"
              onClick={addItem}
              fullWidth
            />
          </Box>
          <Link goTo="reset" label="Zaboravili ste lozinku?"/>
        </form>
       
      </Container>
    </>
  );
};

export default LoginLayout;
