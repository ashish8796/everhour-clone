import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimeSheetDetails } from "../../store/Team/action";
import styled from "styled-components";

const Bottom = styled.table`
  width: 100%;

  img {
    width: 30px;
    border-radius: 50%;
    margin-right: 20px;
  }
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

const TimeSheetbottom = () => {
  const data = useSelector((state) => state.team.data);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimeSheetDetails());
  }, [dispatch]);

  return (
    <Bottom>
      <thead>
        <HeadRow>
          <th>No</th>
          <th>Members</th>
          <th>Started</th>
          <th>Ended</th>
        </HeadRow>
      </thead>
      <tbody>
        {data.length > 0 &&
          data.map(({ user, dailyTime }, i) => {
            return (
              <Row>
                <td>{i + 1}</td>
                <td className="flex align-center">
                  <img
                    src={user.avatarUrl ? user.avatarUrl : "/assets/user.png"}
                    alt={user.email}
                  />
                  <span>{user.email}</span> <span>{user.status}</span>
                </td>
                <td>{dailyTime && dailyTime[0].date}</td>
                <td>{dailyTime && dailyTime[1].date}</td>
              </Row>
            );
          })}
      </tbody>
    </Bottom>
  );
};

export default TimeSheetbottom;
