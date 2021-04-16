import React, { useEffect, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import { filterTaskByDate } from "../../../utils/filterData";
import CreateTask from "./CreateTask";

export default function TaskList() {
  const [tab, setTab] = useState("list");
  const { userTime } = useSelector((state) => state.user, shallowEqual);
  const inputRef = useRef();

  let tasks;
  if (userTime.length) {
    tasks = filterTaskByDate(userTime);
    console.log(tasks);
  }

  const handleTabClick = (e) => {
    inputRef.current.style.borderBottom = "none";
    inputRef.current = e.target;
    inputRef.current.style.borderBottom = "2px solid #24be6a";

    setTab(e.target.value);
  };

  useEffect(() => {
    inputRef.current.style.borderBottom = "2px solid #24be6a";
  }, []);

  return (
    <TaskListCont>
      <TabWrapper>
        <button value="list" ref={inputRef} onClick={handleTabClick}>
          List
        </button>
        <button value="timesheet" onClick={handleTabClick}>
          Timesheet
        </button>
        <button value="timecard" onClick={handleTabClick}>
          Timecard
        </button>
      </TabWrapper>

      <DataWrapper>
        {tab === "list" &&
          Object.keys(tasks).length > 0 &&
          Object.keys(tasks).map((key) => (
            <CreateTask key={key} date={key} tasks={tasks[key]} />
          ))}
      </DataWrapper>
    </TaskListCont>
  );
}

const TaskListCont = styled.div`
  border: 1px solid lightgray;
  border-radius: 3px;
`;

const TabWrapper = styled.section`
  border-bottom: 1px solid lightgray;
  padding-left: 30px;

  button {
    font-size: 16px;
    margin: 0 20px;
    padding: 10px 2px;
    color: #444;
  }
`;
const DataWrapper = styled.section``;
