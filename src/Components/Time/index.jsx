import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setAllProjects } from "../../store/projects/actions";
import MainpageNav from "../MainpageNavbar/MainpageNav";
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
    <div>
      <MainpageNav/>
      <TimeWrapper className="flex justify-center">
      <SearchProject />
      <Timer />
    </TimeWrapper>
    </div>
  );
}

const TimeWrapper = styled.div`
  margin: auto;
`;
