import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentTask } from "../../../store/time/actions";
import { findItem } from "../../../utils/findItem";
import CreateButton from "../../CreateContent/CreateButton";

export default function ShowTasks({
  tasksOfProject,
  setInputName,
  setQuery,
  setIsDataVisible,
}) {
  const dispatch = useDispatch();
  // const {comment } = useSelector(state => state.)

  // console.log(tasksOfProject);

  const handleOnClick = (id) => {
    setIsDataVisible(false);
    setInputName("progress");
    setQuery("");
    dispatch(setCurrentTask(id));
  };

  return (
    <TaskCont className="background-white">
      <RecentTaskPTag className="text-lightgray">RECENT TASK</RecentTaskPTag>
      {tasksOfProject.length > 0 &&
        tasksOfProject.map(({ name, id, status }) => (
          <TaskTag key={id}>
            {status === "open" ? <OpenTask /> : <ClosedTask />}
            <CreateButton
              label={name}
              handleOnClick={() => {
                handleOnClick(id);
              }}
            />
          </TaskTag>
        ))}
    </TaskCont>
  );
}

const TaskCont = styled.div`
  p {
    border: 1px solid lightgray;
    border-top: none;
  }
`;

const RecentTaskPTag = styled.p`
  font-size: 12px;
  padding: 15px 8px 5px;
`;

const TaskTag = styled.p`
  padding-left: 13px;
  button {
    font-size: 15px;
    color: #444;
    padding: 8px;
  }
`;

const OpenTask = styled.span`
  margin-right: 5px;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #24be6a;
`;

const ClosedTask = styled(OpenTask)`
  background-color: #b9b9b9;
`;
