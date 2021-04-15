import React from "react";
import { useSelector } from "react-redux";
import { findItem } from "../../../utils/findItem";
import { changeTimeIntoMinHr } from "../../../utils/utility";

export default function CreateTask({ tasks, date }) {
  const { projects } = useSelector((state) => state.projects);

  return (
    <div>
      <p>{date}</p>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>
            <span>{changeTimeIntoMinHr(task.userTime)}</span>
            <span>{task.comment}</span>
            <span>{findItem(task.projects[0], projects).name}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
