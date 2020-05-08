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

const LoginLayout = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = style();

  const handleSubmit = e => {
    e.preventDefault();

    const body = {
      username,
      password
    };

    dispatch(login("login", body, history));
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
          <Input
            label="Korisničko ime"
            value={username}
            onChange={setUsername}
            required
          />
          <Input
            type="password"
            label="Lozinka"
            value={password}
            onChange={setPassword}
            required
          />
          <Box mt={3}>
            <Button
              label="Prijavi se"
              type="submit"
              onClick={handleSubmit}
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
