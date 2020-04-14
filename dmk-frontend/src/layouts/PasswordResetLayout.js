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
    marginTop: theme.spacing(32),
    display: "flex",
    flexDirection: "column"
  }

}));

const PasswordResetLayout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <Title className={classes.title} title="Promjena Lozinke"></Title>
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
        </form>
      </Container>
    </>
  );
};

export default PasswordResetLayout;
