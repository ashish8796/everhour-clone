import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import { findItem } from "../../../utils/findItem";

export default function ShowTaskProgress() {
  const { currentProjectId, currentProjectTaskId, comment } = useSelector(
    (state) => state.time,
    shallowEqual
  );
  const { projects, tasksOfProject } = useSelector(
    (state) => state.projects,
    shallowEqual
  );

  return (
    <TaskTimerCont>
      <h2>{findItem(currentProjectTaskId, tasksOfProject).name}</h2>
      <p>{findItem(currentProjectId, projects).name}</p>
      <p>{comment}</p>
    </TaskTimerCont>
  );
}

const TaskTimerCont = styled.div``;
