import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FormSignup from "./components/FormSignup";
import FormLogin from "./components/FormLogin";
import Main from "./components/Main";
import theme from "./theme/index";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/login" component={FormLogin} />
            <Route path="/dashboard" component={Main} />
            <Route path="/" component={FormSignup} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
