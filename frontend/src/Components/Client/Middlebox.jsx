import React from "react";
import styled from "styled-components";

const Middle = styled.div`
  margin: 0 auto;
  padding: 20px 40px;
  background-color: #fafafa;
  justify-content: flex-end;

  select {
    padding: 0 20px;
    margin-right: 10px;
    outline: none;
    border: 1px solid lightgrey;
    color: #444;
  }

  input {
    padding: 10px;
  }

  select,
  input {
    border-radius: 2px;
  }

  select:focus,
  input:focus {
    border: 1px solid #24be6a;
  }
`;

const Middlebox = ({ query, setQuery }) => {
  const searchClient = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Middle className="flex">
      <select>
        <option value="none">None</option>
        <option value="budgets">Budgets</option>
        <option value="projects">Projects</option>
      </select>

      <select>
        <option value="none">None</option>
        <option value="budgets">Budgets</option>
        <option value="projects">Projects</option>
      </select>

      <input
        type="text"
        placeholder="Search clients"
        value={query}
        onChange={searchClient}
        className="border-lightgray"
      />
    </Middle>
  );
};

export default Middlebox;
