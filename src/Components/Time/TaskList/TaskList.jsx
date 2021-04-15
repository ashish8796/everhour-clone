import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import { filterTaskByDate } from "../../../utils/filterData";
import CreateTask from "./CreateTask";

export default function TaskList() {
  const [tab, setTab] = useState("list");
  const { userTime } = useSelector((state) => state.user, shallowEqual);
  let tasks;
  if (userTime.length) {
    tasks = filterTaskByDate(userTime);
    console.log(tasks);
  }

  const handleTabClick = (e) => {};
  return (
    <div>
      <TabWrapper>
        <button>List</button>
        <button>Timesheet</button>
        <button>Timecard</button>
      </TabWrapper>

      <DataWrapper>
        {tab === "list" &&
          Object.keys(tasks).length > 0 &&
          Object.keys(tasks).map((key) => (
            <CreateTask key={key} date={key} tasks={tasks[key]} />
          ))}
      </DataWrapper>
    </div>
  );
}

const TabWrapper = styled.section``;
const DataWrapper = styled.section``;
