import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import TeamMembers from "../../Pages/TeamMembers";
import TimerMiddlebox from "./TimerMiddlebox";
import TimerBottombo from "./TimerBottombo";
import TeamTimesheet from "../../Pages/TeamTimesheet";

const Outerbox = styled.section`
  color: #444;

  span {
    font-size: 25px;
  }

  div {
    display: flex;
  }
`;

const Blocks = styled.div`
  margin-top: 20px;

  a {
    display: block;
    color: #444;
    padding-bottom: 15px;
    font-size: 16px;
    margin-right: 40px;
  }

  a:hover {
    color: black;
  }
`;

const MainBoxCont = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 20px 30px 0;
`;

const Mainbox = () => {
  const { pathname } = useLocation();

  const styleTimer = {
    borderBottom: pathname === "/team/timers" ? "3px solid #24be6a" : "none",
  };

  const styleTimesheet = {
    borderBottom: pathname === "/team/timesheet" ? "3px solid #24be6a" : "none",
  };

  const styleMembers = {
    borderBottom: pathname === "/team/members" ? "3px solid #24be6a" : "none",
  };

  console.log("timer is working");

  return (
    <>
      <MainBoxCont>
        <Outerbox>
          <span>Team</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>...</span>
        </Outerbox>

        <Blocks className="flex">
          <NavLink to={"/team/timers"} style={styleTimer}>
            Timers
          </NavLink>

          <NavLink to={"/team/timesheet"} style={styleTimesheet}>
            TimeSheet
          </NavLink>

          <NavLink to={"/team/members"} style={styleMembers}>
            Members
          </NavLink>
        </Blocks>
      </MainBoxCont>
    </>
  );
};

const PageDataWrapper = styled.section``;

export default Mainbox;
