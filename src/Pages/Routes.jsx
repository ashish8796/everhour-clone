import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}
