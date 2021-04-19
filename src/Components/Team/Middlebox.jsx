import React from "react";
import styled from "styled-components";

const Outerbox = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 20px 30px;
  background-color: #fafafa;

  span {
    margin-right: 15px;
  }

  select {
    outline: none;
    border-radius: 2px;
    border: 1px solid #dddada;
    padding: 10px;
    color: #444;

    &:focus {
      border: 1px solid #24be6a;
    }
  }

  option {
    padding: 25px;
    :hover {
      background-color: #24be6a;
    }
  }

  input {
    margin-left: 20px;
    height: 39px;
    padding-left: 10px;
    border: 1px solid #dddada;
    border-radius: 2px;

    &:focus {
      border: 1px solid #24be6a;
    }
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-left: 10px;
  }
`;

const Middlebox = () => {
  return (
    <Outerbox>
      <Input>
        <input type="checkbox" />
        <label>Select all</label>
      </Input>
      <div>
        <span>
          <select name="role">
            <option value="None">None</option>
            <option value="Role">Role</option>
            <option value="Status">Status</option>
          </select>
        </span>
        <span>
          <select name="all">
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Invite">Invite</option>
          </select>
        </span>
        <span>
          <input type="text" placeholder="Search users..." />
        </span>
      </div>
    </Outerbox>
  );
};

export default Middlebox;
