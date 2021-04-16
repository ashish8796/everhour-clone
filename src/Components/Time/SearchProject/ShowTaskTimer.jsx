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
      <div className="flex">
        <p className="flex align-center">
          <img src="/assets/Everhour_logo.svg" alt="logo" />

          <ProjectNameSpan>
            {findItem(currentProjectId, projects).name}
          </ProjectNameSpan>

          {comment && <CommentSpan>&ldquo;{comment}&rdquo;</CommentSpan>}
        </p>
      </div>
    </TaskTimerCont>
  );
}

const TaskTimerCont = styled.div`
  flex-grow: 1;
  div {
    font-size: 14px;

    p:first-child {
      line-height: 25px;
    }
  }

  img {
    width: 14px;
    margin-right: 10px;
  }

  h2 {
    font-size: 18px;
  }
`;

const Span = styled.span``;

const ProjectNameSpan = styled(Span)`
  display: inline-block;
  margin-right: 15px;
`;

const CommentSpan = styled(Span)`
  color: gray;
`;
