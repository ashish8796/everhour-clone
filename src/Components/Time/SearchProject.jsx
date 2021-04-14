import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import CreateInput from "./../CreateContent/CreateInput";
import ShowProjects from "./ShowProjects";
import ShowTasks from "./ShowTasks";

export default function SearchProject() {
  const [query, setQuery] = useState("");
  const [areProjectsVisible, setAreProjectsVisible] = useState(false);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isTaskVisible, setIsTaskVisible] = useState(false);
  const [inputName, setInputName] = useState("project");
  // const [];

  const { projects } = useSelector((state) => state.projects, shallowEqual);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchFocus = (e) => {
    const { name } = e.target;
    if (name === "project") {
      setAreProjectsVisible(true);
      setInputName("task");
    } else if (name === "task") {
      setIsTaskVisible(true);
      setInputName("progress");
    } else if (name === "progress") {
    }
  };

  return (
    <SearchWrapper>
      <CreateInput
        type="text"
        value={query}
        handleOnChange={handleOnChange}
        placeholder="Start typing or select project below"
        handleOnFocus={handleSearchFocus}
        name={inputName}
      />

      {areProjectsVisible && (
        <ShowProjects
          setAreProjectsVisible={setAreProjectsVisible}
          setIsError={setIsError}
          setIsLoading={setIsLoading}
          setIsTaskVisible={setIsTaskVisible}
        />
      )}

      {isLoading ? (
        <p>...Loading</p>
      ) : isTaskVisible ? (
        <ShowTasks setIsTaskVisible={setIsTaskVisible} />
      ) : (
        <></>
      )}
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  border: 1px solid lightgrey;

  input {
    padding: 8px 15px;
    width: 80%;
    font-size: 20px;
  }
`;
