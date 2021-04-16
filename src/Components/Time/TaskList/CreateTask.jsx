import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { findItem } from "../../../utils/findItem";
import { changeTimeIntoMinHr } from "../../../utils/utility";

export default function CreateTask({ tasks, date }) {
  const { projects } = useSelector((state) => state.projects);

  return (
    <DateTaskWrapper>
      <DateTag>{date}</DateTag>

      {tasks.map((task) => (
        <TaskWrapper key={task.id} className="flex  background-white">
          <div className="flex">
            <TimeSpan>{changeTimeIntoMinHr(task.userTime)}</TimeSpan>

            <h3 className="flex">
              {task.status === "open" ? <OpenTask /> : <ClosedTask />}

              <p>
                {task.name} <br />
                <Comment>{task.comment}</Comment>
              </p>
            </h3>
          </div>

          <ProjectCont className="flex align-center">
            <img src="/assets/Everhour_logo.svg" alt="logo" />
            <span>{findItem(task.projects[0], projects).name}</span>
          </ProjectCont>
        </TaskWrapper>
      ))}
    </DateTaskWrapper>
  );
}

const DateTaskWrapper = styled.section``;

const Article = styled.article`
  padding: 8px 30px;
`;

const DateTag = styled(Article)`
  border-bottom: 1px solid lightgray;
`;

const TaskWrapper = styled(Article)`
  border-bottom: 1px dashed lightgray;
  padding: 10px 30px;

  div {
    flex-basis: 80%;
  }
`;

const Span = styled.span`
  display: inline-block;
`;

const TimeSpan = styled(Span)`
  width: 100px;
  text-align: center;
`;

const OpenTask = styled.span`
  margin-top: 6px;
  margin-right: 10px;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #24be6a;
`;

const ClosedTask = styled(OpenTask)`
  background-color: #b9b9b9;
`;

const Comment = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: #585858;
`;

const ProjectCont = styled.section`
  font-size: 14px;
  img {
    width: 16px;
    margin-right: 10px;
  }
`;
