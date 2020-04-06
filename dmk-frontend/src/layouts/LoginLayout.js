// React, Redux, Router
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Material-UI
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Atoms
import Input from "Components/atoms/inputs/Input";
import Logo from "Components/atoms/UI/Logo";
import Button from "Components/atoms/buttons/Button";

// Layout Components
import Header from "Layouts/sections/Header";

// Actions
import { login } from "Modules/units/Auth";

const style = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(18),
    display: "flex",
    flexDirection: "column"
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
      password,
      lang: "en"
    };

    dispatch(login("login", body, history));
  };

  return (
    <>
      <Header />
      <Container maxWidth="xs" className={classes.container}>
        <Logo type="dark" width="100%" />
        <form>
          <Input
            label="Username"
            value={username}
            onChange={setUsername}
            required
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={setPassword}
            required
          />
          <Box mt={2}>
            <Button
              label="Submit"
              icon="chevron_right"
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

export default LoginLayout;
