import React from "react";
import Mainbox from "../Components/Team/Mainbox";
import TimerBottombo from "../Components/Team/TimerBottombo";
import TimerMiddlebox from "../Components/Team/TimerMiddlebox";

const TeamTimer = () => {
  return (
    <div style={{ fontFamily: "Lato,sans-serif" }}>
      <Mainbox />
      <TimerMiddlebox />
      <TimerBottombo />
    </div>
  );
};

export default TeamTimer;
