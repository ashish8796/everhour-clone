import React from "react";
import styled from "styled-components";
import Mainbox from "../Components/Team/Mainbox";
import TimerBottombo from "../Components/Team/TimerBottombo";
import TimerMiddlebox from "../Components/Team/TimerMiddlebox";

const Team = () => {
  return (
    <TeamTimerCont style={{ fontFamily: "Lato,sans-serif" }}>
      <Mainbox />

      <TimerMiddlebox />
      <TimerBottombo />
    </TeamTimerCont>
  );
};

const TeamTimerCont = styled.div`
  background-color: #fff;
  width: 82%;
  margin: 40px auto;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export default Team;
