import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Contact from "screen/Contact";
import Home from "screen/Home";
import Privacy from "screen/Privacy";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
      </Switch>
    </Router>
  );
};
