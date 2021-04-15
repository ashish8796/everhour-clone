import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterData } from "../../../utils/filterData";

import CreateInput from "../../CreateContent/CreateInput";
import ShowProjects from "./ShowProjects";
import ShowTasks from "./ShowTasks";

export default function SearchProject() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputName, setInputName] = useState("project");
  const [isDataVisible, setIsDataVisible] = useState(false);

  const { projects, tasksOfProject } = useSelector(
    (state) => state.projects,
    shallowEqual
  );

  const {} = useSelector((state) => state.time, shallowEqual);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  // const handleOnBlur = (e) => {
  //   setQuery("");
  // };

  const handleSearchFocus = (e) => {
    setIsDataVisible(true);
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

      {inputName === "project" && isDataVisible && (
        <ShowProjects
          projects={filterData(projects, query)}
          setIsError={setIsError}
          setIsLoading={setIsLoading}
          setInputName={setInputName}
          setQuery={setQuery}
        />
      )}

      {isLoading ? (
        <p>...Loading</p>
      ) : inputName === "task" && isDataVisible ? (
        <ShowTasks
          tasksOfProject={filterData(tasksOfProject, query)}
          setInputName={setInputName}
          setQuery={setQuery}
        />
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
