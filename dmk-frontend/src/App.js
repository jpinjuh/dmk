// React
import React from "react";

// Router
import { Router, Route, Switch, Redirect } from "react-router-dom";
import MainRouter from "Router/MainRouter";
import { createBrowserHistory } from "history";

// Notification manager
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

// HMR
import { hot } from "react-hot-loader";

// Redux
import { Provider } from "react-redux";
import configureStore from "Modules/configureStore";

// Theme
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "Styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

// Localization
import "./localization/i18n";

require("babel-polyfill");

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NotificationContainer />
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route path="/" component={MainRouter} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default hot(module)(App);
