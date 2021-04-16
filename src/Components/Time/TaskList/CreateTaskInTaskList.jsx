import React, { useRef, useState } from "react";
import styled from "styled-components";
import CreateTaskTimerButton from "./CreateTaskTimerButton";
import { findItem } from "../../../utils/findItem";
import { changeTimeIntoMinHr } from "../../../utils/utility";
import { useSelector } from "react-redux";

export default function CreateTaskInTaskList({ task }) {
  const { projects } = useSelector((state) => state.projects);
  const [isTimerButtonVisible, setIsTimerButtonVisible] = useState(false);

  const taskRef = useRef(null);
  const handleMouseOver = (id) => {
    taskRef.current = id;
    setIsTimerButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTimerButtonVisible(false);
  };

  return (
    <TaskWrapper key={task.id} className="flex  background-white">
      <div
        className="flex"
        onMouseOver={() => {
          handleMouseOver(task.id);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <TimeSpan>{changeTimeIntoMinHr(task.userTime)}</TimeSpan>

        <h3 className="flex">
          {task.status === "open" ? <OpenTask /> : <ClosedTask />}

          <section>
            <p className="flex align-center">
              <span>{task.name}</span>
              {isTimerButtonVisible && (
                <CreateTaskTimerButton id={taskRef.current} />
              )}
            </p>

            <Comment>{task.comment}</Comment>
          </section>
        </h3>
      </div>

      <ProjectCont className="flex align-center">
        <img src="/assets/Everhour_logo.svg" alt="logo" />
        <span>{findItem(task.projects[0], projects).name}</span>
      </ProjectCont>
    </TaskWrapper>
  );
}

const Article = styled.article`
  padding: 8px 30px;
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
