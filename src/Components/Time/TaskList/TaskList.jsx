import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import { filterTask } from "../../../utils/filterData";

export default function TaskList() {
  const [tab, setTab] = useState("list");
  const { userTime } = useSelector((state) => state.user, shallowEqual);
  let tasks;
  if (userTime.length) {
    tasks = filterTask(userTime);
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

      <DataWrapper>{tab === "list" && <></>}</DataWrapper>
    </div>
  );
}

const TabWrapper = styled.section``;
const DataWrapper = styled.section``;
