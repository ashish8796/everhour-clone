import React from "react";
import { Switch, Route } from "react-router-dom";
import { Project } from "../Components/Project/Project";
import Home from "./Home";
import Time from "./Time";
import TeamTimer from "./TeamTimer";
import TeamTimesheet from "./TeamTimesheet";
import TeamMembers from "./TeamMembers";
import { ProjectTask } from "../Components/Project/Task/ProjectTask";
import { Login } from "../Components/Auth/Login/Login";
import { Signup } from "../Components/Auth/Signup/Signup";
import { PrivateRoute } from "./PrivateRoute";
import Client from "./Client";
import { Invoices } from "../Components/Invoices/Invoices";
import { InvoiceSheet } from "../Components/Invoices/InvoiceSheet/InvoiceSheet";
import { Expenses } from "../Components/Expenses/Expenses";

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

      <PrivateRoute path="/time">
        <Time />
      </PrivateRoute>

      <PrivateRoute exact path="/timer">
        <TeamTimer />
      </PrivateRoute>

      <PrivateRoute exact path="/timesheet">
        <TeamTimesheet />
      </PrivateRoute>

      <PrivateRoute exact path="/members">
        <TeamMembers />
      </PrivateRoute>

      <PrivateRoute path="/projects" exact>
        <Project />
      </PrivateRoute>

      <PrivateRoute path="/clients" exact>
        <Client />
      </PrivateRoute>

      <PrivateRoute path="/home" exact>
        <div>page still in building process</div>
      </PrivateRoute>

      <PrivateRoute path="/schedule" exact>
        <div>page still in building process</div>
      </PrivateRoute>
      <PrivateRoute path="/task/:id">
        <ProjectTask />
      </PrivateRoute>
      <PrivateRoute path="/expenses">
        <Expenses />
      </PrivateRoute>

      <PrivateRoute path="/invoices" exact>
        <Invoices />
      </PrivateRoute>
      <PrivateRoute path="/invoices/:id" exact>
        <InvoiceSheet />
      </PrivateRoute>

      <Route>
        <h1>404! Sorry Page not found</h1>
      </Route>
    </Switch>
  );
}
