import React from "react";

import { Route, Switch } from "react-router-dom";

import View from "./View";

export default function ProverbsRouter() {
  return (
    <Switch>
      <Route path="/proverbs" component={View} />
    </Switch>
  );
}
