import React from "react";
import styled from "styled-components";

const Middlebox = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #fafafa;

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
`;

const Left = styled.div`
  span {
    margin-right: 10px;
  }
`;

const Right = styled.div`
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

const TimerMiddlebox = () => {
  return (
    <Middlebox>
      <Left>
        <span className="primary-color">Members:-</span>
        <select>
          <option value="all">all</option>
          <option value="only one">ANY ONE</option>
        </select>
      </Left>
      <Right>
        <select>
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="last week">last week</option>
          <option value="this week">this week</option>
        </select>
        <input
          type="text"
          className="primary-color"
          placeholder="Search members"
        />
      </Right>
    </Middlebox>
  );
};

export default TimerMiddlebox;
