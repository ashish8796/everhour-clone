import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setAllProjects } from "../../store/projects/actions";
import MainpageNav from "../MainpageNavbar/MainpageNav";
import SearchProject from "./SearchProject";
import Timer from "./Timer";

export default function Time() {
  const dispatch = useDispatch();
  const { currentProject, currentTask } = useSelector(
    (state) => state.time,
    shallowEqual
  );
  const { projects, taskOfProject } = useSelector(
    (state) => state.projects,
    shallowEqual
  );

  useEffect(() => {
    (async () => {
      dispatch(setAllProjects());
    })();
  }, [dispatch]);

  return (
    <div>
      <MainpageNav/>
    <TimeWrapper className="flex-column align-center">
      <CurrentDataCont>
        <CurrentProject>{currentProject?.name}</CurrentProject>

        <CurrentTask>{currentTask?.name}</CurrentTask>
      </CurrentDataCont>

      <FeatureSection className="flex justify-center">
        <SearchProject />
        <Timer />
      </FeatureSection>
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
