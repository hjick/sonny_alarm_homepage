import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import Contact from "screen/Contact";
import Privacy from "screen/Privacy";

import logo from "img/logo.png";
import Home from "screen/Home";

const Logo = styled.img`
  width: 512px;
  height: 512px;
  margin-right: auto;
  margin-left: auto;
`;

export default () => {
  return (
    <Router>
      <Logo src={logo} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
