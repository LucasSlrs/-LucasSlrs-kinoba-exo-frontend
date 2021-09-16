import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FormSignup from "./components/FormSignup";
import theme from "./theme/index";
// import DeleteUserBtn from "./components/DeleteUserBtn";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" component={FormSignup} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
