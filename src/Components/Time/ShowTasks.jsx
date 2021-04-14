import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTask } from "../../store/time/actions";
import { findItem } from "../../utils/findItem";
import CreateButton from "../CreateContent/CreateButton";

export default function ShowTasks({ setIsTaskVisible }) {
  const dispatch = useDispatch();
  const { tasksOfProject } = useSelector((state) => state.projects);

  const handleOnClick = (id) => {
    const currentTask = findItem(id, tasksOfProject);
    dispatch(setCurrentTask(currentTask));
    setIsTaskVisible(false);
  };

  return (
    <div>
      {tasksOfProject.length > 0 &&
        tasksOfProject.map(({ name, id }) => (
          <p key={id}>
            <CreateButton
              label={name}
              handleOnClick={() => {
                handleOnClick(id);
              }}
            />
          </p>
        ))}
    </div>
  );
}
