import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setAllProjects } from "../../store/projects/actions";
import { setUser, setUserTime } from "../../store/user/actions";
import { findItem } from "../../utils/findItem";
import MainpageNav from "../MainpageNavbar/MainpageNav";
import SearchProject from "./SearchProject/SearchProject";
import ShowTaskProgress from "./SearchProject/ShowTaskTimer";
import TaskList from "./TaskList/TaskList";
import Timer from "./Timer/Timer";

export default function Time() {
  const dispatch = useDispatch();
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
    <div>
      <MainpageNav />
      <TimeWrapper className="flex-column align-center">
        {status === "stopped" && (
          <CurrentDataCont>
            <CurrentProject>{currentProject?.name}</CurrentProject>

            <CurrentTask>{currentTask?.name}</CurrentTask>
          </CurrentDataCont>
        )}

        <FeatureSection className="flex justify-center">
          {status === "stopped" ? <SearchProject /> : <ShowTaskProgress />}

          <Timer />
        </FeatureSection>

        <TaskLiftedSection>
          {userTime.length > 0 && <TaskList />}
        </TaskLiftedSection>
      </TimeWrapper>
    </div>
  );
}

const TimeWrapper = styled.div`
  margin: auto;
`;

const Section = styled.section``;

const CurrentDataCont = styled(Section)``;
const FeatureSection = styled(Section)``;

const CurrentProject = styled.div``;
const CurrentTask = styled.div``;

const TaskLiftedSection = styled(Section)``;
