import React, { useState } from "react";
import styled from "styled-components";

export default function CreateTaskTimerButton({ id }) {
  console.log(id);

  const handleTimer = () => {};

  return (
    <TimerButton onClick={handleTimer}>
      <img src="/assets/start.svg" alt="logo" />
    </TimerButton>
  );
}

const TimerButton = styled.button`
  margin-bottom: -5px;
  margin-left: 20px;
`;
