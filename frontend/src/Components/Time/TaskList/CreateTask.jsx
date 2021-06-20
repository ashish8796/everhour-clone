import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import CreateTaskInTaskList from "./CreateTaskInTaskList";

export default function CreateTask({ tasks, date }) {
  return (
    <DateTaskWrapper>
      <DateTag>{date}</DateTag>

      {tasks.map((task) => (
        <CreateTaskInTaskList key={task.id} date={date} task={task} />
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
