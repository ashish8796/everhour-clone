import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setTasksOfProject } from "../../store/projects/actions";
import { setCurrentProject } from "../../store/time/actions";
import { findItem } from "../../utils/findItem";

export default function ShowProjects({
  setAreProjectsVisible,
  setIsLoading,
  setIsError,
  setIsTaskVisible,
}) {
  const projects = useSelector(
    (state) => state.projects.projects,
    shallowEqual
  );
  const dispatch = useDispatch();

  const handleProjectClick = async (id) => {
    setAreProjectsVisible(false);
    const currentProject = findItem(id, projects);
    dispatch(setCurrentProject(currentProject));

    try {
      setIsLoading(true);
      const data = await dispatch(setTasksOfProject(id));

      setIsLoading(false);
      setIsTaskVisible(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    return () => {
      setIsLoading(false);
      setIsError(false);
    };
  }, []);

  return (
    <ProjectsModal>
      <h2>RECENT PROJECTS</h2>
      {projects.map((project) => (
        <p key={project.id}>
          <ProjectButton
            onClick={(e) => {
              handleProjectClick(project.id);
            }}
          >
            {project.name}
          </ProjectButton>
        </p>
      ))}
    </ProjectsModal>
  );
}

const ProjectsModal = styled.div``;
const ProjectButton = styled.button``;
