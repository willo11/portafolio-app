import React from "react";
import { Navbar } from "../components/Navbar";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../theme";

import HomeScreen from "../HomeScreen";
import AboutScreen from "../AboutScreen";
import ProjectScreen from "../ProjectScreen";
import EducationScreen from "../EducationScreen";
import ContactScreen from "../ContactScreen";

export const AppRouter = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <div className="container mt-2">
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route exact path="/about">
                <AboutScreen />
              </Route>
              <Route exact path="/project">
                <ProjectScreen />
              </Route>
              <Route exact path="/education">
                <EducationScreen />
              </Route>
              <Route exact path="/contact">
                <ContactScreen />
              </Route>

              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default AppRouter;
