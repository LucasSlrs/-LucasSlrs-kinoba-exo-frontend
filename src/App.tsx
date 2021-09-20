import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FormSignup from "./components/FormSignup";
import FormLogin from "./components/FormLogin";
import Main from "./components/Main";
import theme from "./theme/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isAuthentificated, setAuthentificate] = useState<Boolean>(false);

  const setAuth = (boolean: boolean) => {
    setAuthentificate(boolean);
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) =>
                !isAuthentificated ? (
                  <FormLogin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/dashboard"
              render={(props) =>
                isAuthentificated ? (
                  <Main {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/"
              render={(props) =>
                !isAuthentificated ? (
                  <FormSignup {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </Router>
      </ThemeProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
}

export default App;
