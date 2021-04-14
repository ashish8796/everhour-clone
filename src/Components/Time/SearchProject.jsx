import React, { useState } from "react";
import styled from "styled-components";
import CreateInput from "./../CreateContent/CreateInput";

export default function SearchProject() {
  const [query, setQuery] = useState("");

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <SearchWrapper>
      <CreateInput
        type="text"
        value={query}
        handleOnChange={handleOnChange}
        placeholder="Start typing or select project below"
      />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  border: 1px solid lightgrey;

  input {
    padding: 8px 15px;
    font-size: 20px;
    width: 80%;
  }
`;
