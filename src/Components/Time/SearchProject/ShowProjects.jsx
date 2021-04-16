import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setTasksOfProject } from "../../../store/projects/actions";

import { setCurrentProject } from "../../../store/time/actions";

import { findItem } from "../../../utils/findItem";

export default function ShowProjects({
  setIsLoading,
  setIsError,
  projects,
  setInputName,
  setQuery,
  setPlaceholder,
}) {
  const dispatch = useDispatch();

  const handleProjectClick = async (id) => {
    setInputName("task");
    setQuery("");
    setPlaceholder("Select Task");
    // const currentProject = findItem(id, projects);
    dispatch(setCurrentProject(id));

    try {
      setIsLoading(true);
      const data = await dispatch(setTasksOfProject(id));

      setIsLoading(false);
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
    <ProjectsModal className="background-white">
      <p>RECENT PROJECTS</p>
      {projects.map((project) => (
        <ProjectPTag key={project.id} className="flex align-center">
          <Logo>
            <img src="/assets/Everhour_logo.svg" alt="logo" />
          </Logo>
          <ProjectButton
            onClick={(e) => {
              handleProjectClick(project.id);
            }}
          >
            {project.name}
          </ProjectButton>

          <span className="text-lightgray">. Everhour</span>
        </ProjectPTag>
      ))}
    </ProjectsModal>
  );
}

const ProjectsModal = styled.div`
  p:first-child {
    font-size: 12px;
    padding: 15px 8px 5px;
  }

  p {
    border: 1px solid lightgray;
    border-top: none;
  }
`;

const ProjectPTag = styled.p`
  &:first-child {
    background-color: #f3fbf7;
  }

  padding-left: 13px;
`;

const Logo = styled.span`
  display: inline-flex;
  width: 18px;
  align-items: center;
  img {
    width: 100%;
  }
`;

const ProjectButton = styled.button`
  font-size: 15px;
  color: #444;
  padding: 8px;
`;
