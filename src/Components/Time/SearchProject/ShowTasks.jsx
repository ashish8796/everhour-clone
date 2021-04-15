import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTask } from "../../../store/time/actions";
import { findItem } from "../../../utils/findItem";
import CreateButton from "../../CreateContent/CreateButton";

export default function ShowTasks({ tasksOfProject, setInputName, setQuery }) {
  const dispatch = useDispatch();

  const handleOnClick = (id) => {
    setInputName("progress");
    setQuery("");
    dispatch(setCurrentTask(id));
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
