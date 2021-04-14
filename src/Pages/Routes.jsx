import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Time from "./Time";
import { Project } from "./Project";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/time">
        <Time />
      </Route>

      <Route path="/project" exact>
        <Project />
      </Route>
    </Switch>
  );
}
