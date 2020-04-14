// React, Redux, Router
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Material-UI
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Atoms
import Input from "Components/atoms/inputs/Input";
import Button from "Components/atoms/buttons/Button";
import Title from 'Components/atoms/UI/Title'
import Link from 'Components/atoms/hyperlinks/Link'

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

const PasswordResetLayout = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = style();

  const handleSubmit = e => {
    e.preventDefault();

    const body = {
      email,
      lang: "en"
    };

    //dispatch(login("login", body, history));
    console.log(body)
  };

  return (
    <>
      <Header />
      <Container maxWidth="xs" className={classes.container}>
        <Box mb={5}>
          <Title className={classes.title} variant="h3" 
            align={'center'} title="Promjena Lozinke"></Title>
        </Box>
        <form>
          <Input
            label="Email"
            value={email}
            onChange={setEmail}
            required
          />
          <Box mt={3}>
            <Button
              label="Pošalji"
              type="submit"
              onClick={handleSubmit}
              fullWidth
            />
          </Box>
          <Link goTo="login" label="Povratak na prijavu"/>
        </form>
      </Container>
    </>
  );
};

export default PasswordResetLayout;
