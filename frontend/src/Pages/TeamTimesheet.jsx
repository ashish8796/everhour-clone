import React from "react";
import styled from "styled-components";
import Mainbox from "../Components/Team/Mainbox";
import TimerMiddlebox from "../Components/Team/TimerMiddlebox";
import TimeSheetbottom from "../Components/Team/TimeSheetbottom";

const TeamTimesheet = () => {
  return (
    <TimeSheetCont>
      <Mainbox />
      <TimerMiddlebox />
      <TimeSheetbottom />
    </TimeSheetCont>
  );
};

const TimeSheetCont = styled.div`
  background-color: #fff;
  width: 82%;
  margin: 40px auto;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
`;

export default TeamTimesheet;
