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
  setIsDataVisible,
}) {
  const dispatch = useDispatch();

  const handleProjectClick = async (id) => {
    setInputName("task");
    setQuery("");

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

  const handleCloseProject = () => {
    setIsDataVisible(false);
  };

  useEffect(() => {
    return () => {
      setIsLoading(false);
      setIsError(false);
    };
  }, []);

  return (
    <ProjectsModal className="background-white">
      <p className="flex justify-between">
        <span>RECENT PROJECTS</span>{" "}
        <span className="text-lightgray" onClick={handleCloseProject}>
          X
        </span>
      </p>
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
  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
  border-radius: 3px;

  p:first-child {
    font-size: 12px;
    padding: 15px 8px 5px;

    span:last-child {
      font-size: 20px;
      cursor: pointer;
    }
  }

  p {
    border-bottom: 1px solid lightgray;
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
