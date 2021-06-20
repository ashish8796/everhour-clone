import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createSection, createTask } from "../../../store/task/actions";
import { changeTimeIntoMinHr } from "../../../utils/utility";

export default function CreateTaskBySection({ tasks, section, projectId }) {
  console.log({ tasks, projectId, section });
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  const [buttonType, setButtonType] = useState("");

  console.log(tasks);

  const handleToggleTaskStatus = (e) => {};

  const createTaskJSx = (task) => {
    return (
      <TaskCont key={task.id} className="flex" status={task.status}>
        <input
          type="checkbox"
          checked={task.status === "closed"}
          onChange={handleToggleTaskStatus}
        />

        <p>
          <span>{task.name}</span>{" "}
          <span>
            {task.time && changeTimeIntoMinHr(Number(task.time.total))}
          </span>
        </p>
      </TaskCont>
    );
  };

  const handleAddItem = async (e) => {
    const { value } = e.target;

    try {
      if (value === "Task" && query) {
        await dispatch(createTask(projectId, section.id, query));
        setQuery("");
        setIsAddTaskVisible(false);
      } else if (value === "Section" && query) {
        await dispatch(createSection(projectId, query));
        setQuery("");
        setIsAddTaskVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOnClick = (e) => {
    const { value } = e.target;
    setIsAddTaskVisible(true);
    setButtonType(value);
  };

  const handleClose = (e) => {
    setIsAddTaskVisible(false);
  };

  return (
    <Section>
      <SectionName>{section.name}</SectionName>

      <TasksWrapper>{tasks?.map((task) => createTaskJSx(task))}</TasksWrapper>

      <AddTaskWrapper showInput={isAddTaskVisible}>
        {isAddTaskVisible && (
          <>
            <input
              type="text"
              onChange={handleOnChange}
              value={query}
              placeholder={`Add ${buttonType}...`}
              className={`border-lightgray`}
            />

            <div>
              <AddItemButton onClick={handleAddItem} value={buttonType}>
                Add {buttonType}
              </AddItemButton>
              <Cancel onClick={handleClose}>Cancel</Cancel>
            </div>
          </>
        )}

        {!isAddTaskVisible && (
          <>
            <ToggleAddTaskButton
              className={`border-lightgray`}
              value="Task"
              onClick={handleOnClick}
            >
              Add Task
            </ToggleAddTaskButton>

            <AddSection
              className="text-lightgray"
              value="Section"
              onClick={handleOnClick}
            >
              Add Section
            </AddSection>
          </>
        )}
      </AddTaskWrapper>
    </Section>
  );
}

const Section = styled.section`
  padding: 20px 30px 0;
`;

const SectionName = styled.h2`
  font-size: 19px;
`;

const TasksWrapper = styled.section`
  padding-top: 5px;
`;

const TaskCont = styled.div`
  padding: 10px 30px;

  input {
    margin-right: 10px;
  }

  p {
    color: ${(props) => (props.status === "closed" ? "#a0a0a0" : "#444")};

    span:last-child {
      color: #444;
      font-size: 13px;
      margin-left: 20px;
    }
  }
`;

const AddTaskWrapper = styled.div`
  padding: 8px 30px;
  margin-top: 10px;
  border-radius: 2px;
  background-color: ${(props) => (props.showInput ? "#fafafa" : "#ffffff")};
  display: ${(props) => (props.showInput ? "flex" : "block")};
  flex-direction: column;

  input {
    padding: 8px 15px;
    border-radius: 2px;
    color: #555;
    &:focus {
      border: 1px solid rgb(6, 170, 6);
    }
  }
`;

const Button = styled.button`
  padding: 8px 30px;
  border-radius: 2px;
  font-size: 16px;
`;

const AddSection = styled(Button)`
  &:hover {
    color: #4a90e2;
  }
`;

const ToggleAddTaskButton = styled(Button)`
  color: #666;
  background-color: #fafafa;

  &:hover {
    background-color: #efefef;
  }
`;

const AddItemButton = styled(Button)`
  margin: 0;
  background-color: #24be6a;
  color: #fff;
  font-size: 14px;
  padding: 8px 15px;
  margin-top: 10px;
`;

const Cancel = styled(Button)`
  font-size: 14px;
  padding: 8px 15px;
  margin-top: 10px;
  color: #bbbbbb;

  &:hover {
    color: #4a90e2;
  }
`;
