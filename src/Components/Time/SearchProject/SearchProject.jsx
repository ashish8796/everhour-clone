import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setComment } from "../../../store/time/actions";
import { filterData } from "../../../utils/filterData";

import CreateInput from "../../CreateContent/CreateInput";
import ShowProjects from "./ShowProjects";
import ShowTasks from "./ShowTasks";

export default function SearchProject({ inputName, setInputName }) {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isDataVisible, setIsDataVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "Start typing or select project below"
  );

  const { projects, tasksOfProject } = useSelector(
    (state) => state.projects,
    shallowEqual
  );

  const {} = useSelector((state) => state.time, shallowEqual);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
    dispatch(setComment(e.target.value));
  };

  // const handleOnBlur = (e) => {
  //   dispatch(setComment(query));
  // };

  const handleSearchFocus = (e) => {
    setIsDataVisible(true);
  };

  useEffect(() => {
    //cleanup
    return () => {
      setQuery("");
      setPlaceholder("Start typing or select project below");
    };
  }, []);

  return (
    <SearchWrapper className="flex-column justify-center">
      <CreateInput
        type="text"
        value={query}
        handleOnChange={handleOnChange}
        placeholder={placeholder}
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
          setPlaceholder={setPlaceholder}
        />
      )}

      {isLoading ? (
        <p>...Loading</p>
      ) : inputName === "task" && isDataVisible ? (
        <ShowTasks
          tasksOfProject={filterData(tasksOfProject, query)}
          setInputName={setInputName}
          setQuery={setQuery}
          setPlaceholder={setPlaceholder}
        />
      ) : (
        <></>
      )}
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  width: 100%;
  position: relative;

  div {
    position: absolute;
    top: 58px;
    right: 0;
    left: 0;
  }

  input {
    width: 100%;
    padding: 8px 15px;
    height: 55px;
    font-size: 20px;
    display: block;
    &::placeholder {
      font-size: 16px;
      color: #d4d4d4;
    }
  }
`;
