import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setAllProjects } from "../../store/projects/actions";
import { setCurrentProject, setCurrentTask } from "../../store/time/actions";
import { setUser, setUserTime } from "../../store/user/actions";
import { findItem } from "../../utils/findItem";
import MainpageNav from "../MainpageNavbar/MainpageNav";
import SearchProject from "./SearchProject/SearchProject";
import ShowTaskProgress from "./SearchProject/ShowTaskTimer";
import TaskList from "./TaskList/TaskList";
import Timer from "./Timer/Timer";

export default function Time() {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("project");
  const [isDataVisible, setIsDataVisible] = useState(false);
  const { currentProjectId, currentProjectTaskId, timer } = useSelector(
    (state) => state.time,
    shallowEqual
  );

  const { projects, tasksOfProject } = useSelector(
    (state) => state.projects,
    shallowEqual
  );
  const { user, userTime } = useSelector((state) => state.user, shallowEqual);
  const { status } = timer;

  let currentTask, currentProject;
  if (currentProjectTaskId) {
    currentTask = findItem(currentProjectTaskId, tasksOfProject);
  }
  if (currentProjectId) {
    currentProject = findItem(currentProjectId, projects);
  }

  const handleCloseProject = () => {
    dispatch(setCurrentProject(""));
    setInputName("project");
  };

  const handleCloseTask = () => {
    dispatch(setCurrentTask(""));
    setInputName("task");
    setIsDataVisible(true);
  };

  useEffect(() => {
    (async () => {
      dispatch(setAllProjects());
      dispatch(setUser());
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      if (user.id) {
        dispatch(setUserTime(user.id));
      }
    })();
  }, [dispatch, user.id]);

  return (
    <>
      <MainpageNav />

      <TimeWrapper className="flex-column align-center primary-color">
        {status === "stopped" && currentProjectId && (
          <CurrentDataCont className="flex">
            <CurrentProject className="background-white text-lightgray">
              <p className="flex justify-between">
                <span>Project</span>
                <CloseSpan>
                  <button
                    className="text-lightgray"
                    onClick={handleCloseProject}
                  >
                    X
                  </button>
                </CloseSpan>
              </p>
              <p>
                <ItemName>{currentProject?.name}</ItemName> . Everhour
              </p>
            </CurrentProject>

            {currentProjectTaskId && (
              <CurrentTask className="background-white text-lightgray">
                <p className="flex justify-between">
                  <span>Task</span>
                  <CloseSpan>
                    <button
                      className="text-lightgray"
                      onClick={handleCloseTask}
                    >
                      X
                    </button>
                  </CloseSpan>
                </p>
                <p>
                  <ItemName>{currentTask?.name}</ItemName>
                </p>
              </CurrentTask>
            )}
          </CurrentDataCont>
        )}

        <FeatureSection className="flex justify-center background-white">
          {status === "stopped" ? (
            <SearchProject
              inputName={inputName}
              setInputName={setInputName}
              setIsDataVisible={setIsDataVisible}
              isDataVisible={isDataVisible}
            />
          ) : (
            <ShowTaskProgress />
          )}

          <Timer />
        </FeatureSection>

        <TaskListSection
          opacity={
            isDataVisible && (inputName == "project" || inputName == "task")
              ? 0.5
              : 1
          }
        >
          {userTime.length > 0 && <TaskList />}
        </TaskListSection>
      </TimeWrapper>
    </>
  );
}

const TimeWrapper = styled.div`
  margin: 40px auto;
  max-width: 82%;
  font-family: Lato, sans-serif;
  /* border: 1px solid red; */
`;

const Section = styled.section`
  width: 100%;
`;

const CurrentDataCont = styled(Section)``;

const FeatureSection = styled(Section)`
  border: 1px solid lightgrey;
  padding: 1px;
  border-radius: 3px;
`;

const CurrentProject = styled.div`
  margin-bottom: 30px;
  padding: 3px 10px;
  border: 1px solid lightgrey;
  border-left: 4px solid #efbc45;
  font-size: 14px;
  border-radius: 3px;

  p {
    margin: 3px 0;
  }
`;

const ItemName = styled.span`
  color: black;
  font-size: 16px;
`;

const CloseSpan = styled.span``;

const CurrentTask = styled(CurrentProject)`
  margin-left: 30px;
`;

const TaskListSection = styled(Section)`
  opacity: ${(props) => props.opacity};
  margin: 40px 0;
`;
