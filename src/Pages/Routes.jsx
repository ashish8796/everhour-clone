import React from "react";
import { Switch, Route } from "react-router-dom";
import { Project } from "../Components/Project/Project";
import Home from "./Home";
import Time from "./Time";
import TeamTimer from "./TeamTimer";
import TeamTimesheet from "./TeamTimesheet";
import TeamMembers from "./TeamMembers";
import { Login } from "../Components/Auth/Login/Login";
import { Signup } from "../Components/Auth/Signup/Signup";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/time">
        <Time />
      </Route>

      <Route exact path="/timer">
        <TeamTimer />
      </Route>
      <Route exact path="/timesheet">
        <TeamTimesheet />
      </Route>
      <Route exact path="/members">
        <TeamMembers />
      </Route>

      <Route path="/projects" exact>
        <Project />
      </Route>
    </Switch>
  );
}
