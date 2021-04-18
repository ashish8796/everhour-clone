import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Project } from "../Components/Project/Project";
import Home from "./Home";
import Time from "./Time";
import TeamTimer from "./Team";
import TeamTimesheet from "./TeamTimesheet";
import TeamMembers from "./TeamMembers";
import { ProjectTask } from "../Components/Project/Task/ProjectTask";
import { Login } from "../Components/Auth/Login/Login";
import { Signup } from "../Components/Auth/Signup/Signup";
import { PrivateRoute } from "./PrivateRoute";
import Client from "./Client";
import { Invoices } from "../Components/Invoices/Invoices";
import { useSelector } from "react-redux";
import MainpageNav from "../Components/MainpageNavbar/MainpageNav";
import { InvoiceSheet } from "../Components/Invoices/InvoiceSheet/InvoiceSheet";
import { Expenses } from "../Components/Expenses/Expenses";
import Team from "./Team";
import { Pie } from "../Components/Expenses/Pie";

export default function Routes() {
  const { pathname } = useLocation();

  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth);
  return (
    <>
      {isAuth && <MainpageNav />}

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

        <PrivateRoute exact path="/team/timers">
          <Team />
        </PrivateRoute>

        <PrivateRoute exact path="/team/:subLink">
          {pathname === "/team/timesheet" ? <TeamTimesheet /> : <TeamMembers />}
        </PrivateRoute>

        <PrivateRoute path="/projects" exact>
          <Project />
        </PrivateRoute>

        <PrivateRoute path="/clients" exact>
          <Client />
        </PrivateRoute>

        <PrivateRoute path="/expenses" exact>
          <Expenses />
        </PrivateRoute>

        <PrivateRoute path="/expense-chart" exact>
          <Pie />
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
    </>
  );
}
