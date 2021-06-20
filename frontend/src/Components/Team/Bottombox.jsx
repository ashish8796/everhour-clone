import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";

const Bigrow = styled.th`
  /* font-size: 16px; */

  input {
    margin-right: 10px;
    margin-left: -25px;
  }
`;

const Bottom = styled.table`
  width: 100%;
  color: #333333;
`;

const Row = styled.tr`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  border-bottom: 1px solid lightgray;
  padding: 25px 0;

  &:last-child {
    border-bottom: none;
  }

  td {
    text-align: center;
    color: #444;
  }
`;

const HeadRow = styled(Row)`
  width: 100%;
  border-bottom: 1px solid lightgray !important;

  th {
    font-size: 16px;
  }
`;

const Bottombox = () => {
  const { members } = useSelector((state) => state.team, shallowEqual);
  return (
    <Bottom>
      <thead>
        <HeadRow>
          <Bigrow>
            <input type="checkbox" />
            Admin
          </Bigrow>
          <th>Rate</th>
          <th>Cost</th>
          <th>Capacity</th>
          <th>Limit</th>
          <th>Team Groups</th>
        </HeadRow>
      </thead>
      <tbody>
        {members?.map(
          ({ name, active, rate, cost, capacity, limit, teamGroups }) => {
            return (
              <Row>
                <Bigrow>
                  {name} <span>{active ? "active" : "not active"}</span>
                </Bigrow>
                <td>{rate}</td>
                <td>{cost}</td>
                <td>{capacity}</td>
                <td>{limit}</td>
                <td>{teamGroups}</td>
              </Row>
            );
          }
        )}
      </tbody>
    </Bottom>
  );
};

export default Bottombox;
