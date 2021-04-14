import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";

export default function ShowProjects() {
  const projects = useSelector((state) => state.time.projects, shallowEqual);

  return (
    <ProjectsModal>
      {projects.map((project) => (
        <p>{project.name}</p>
      ))}
    </ProjectsModal>
  );
}

const ProjectsModal = styled.div``;
