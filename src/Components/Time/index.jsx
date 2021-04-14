import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setAllProjects } from "../../store/projects/actions";
import SearchProject from "./SearchProject";
import Timer from "./Timer";

export default function Time() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setAllProjects());
    })();
  }, [dispatch]);

  return (
    <TimeWrapper className="flex justify-center">
      <SearchProject />
      <Timer />
    </TimeWrapper>
  );
}

const TimeWrapper = styled.div`
  margin: auto;
`;
