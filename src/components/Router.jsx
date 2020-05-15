import React from "react";

import {
  // See https://reacttraining.com/react-router/web/guides/quick-start for details
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./home/Router";
import Proverbs from "./proverbs/Router";

const ROUTES = [
  // {path: '', component: RouterComponent, [exact]}
  { path: "/home", component: Home },
  { path: "/proverbs", component: Proverbs }
];

export default function(props) {
  return (
    <Router basename="/bruegel">
      <Switch>
        {ROUTES.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}
