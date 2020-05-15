import React from "react";

import { Route, Switch } from "react-router-dom";

import View from "./View";

export default function HomeRouter() {
  return (
    <Switch>
      <Route path="/home" component={View} />
    </Switch>
  );
}
