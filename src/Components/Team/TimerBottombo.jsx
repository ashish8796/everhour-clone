import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTimerDetails } from "../../store/Team/action";
import styled from "styled-components";
import { changeTimeIntoMinHr } from "../../utils/utility";

const Th = styled.th`
  color: #666666;
  font-size: 20px;
  margin-right: 30px;
`;

const Bigrow = styled.th`
  /* font-size: 22px; */
`;

const Bottom = styled.div`
  margin: auto;
  padding: 0 40px;
  color: #333333;
`;

const LoadingCont = styled.div`
  height: 50vh;

  h1 {
    font-size: 30px;
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

const TimerBottombo = () => {
  const { data, isLoading, isError } = useSelector(
    (state) => state.team,
    shallowEqual
  );
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(getTimerDetails());
  }, [dispatch]);

  return isLoading ? (
    <LoadingCont className="flex justify-center align-center">
      <h1>...Loading</h1>
    </LoadingCont>
  ) : isError ? (
    <div>Something went wrong</div>
  ) : (
    <Bottom>
      {data?.map((info) => {
        return (
          <table style={{ width: "100%" }}>
            <thead>
              <HeadRow>
                <th></th>
                <Bigrow>Activity</Bigrow>
                <Th>Time</Th>
                <Th>Commit</Th>
                <Th>Total</Th>
              </HeadRow>
            </thead>
            <tbody>
              <Row>
                <td>{info.user.name}</td>
                <td>
                  <span>{info.status}</span>
                </td>
                <td>{info.startedAt}</td>
                <td>{info.comment}</td>
                <td>{changeTimeIntoMinHr(info.duration)}</td>
              </Row>
            </tbody>
          </table>
        );
      })}
    </Bottom>
  );
};

export default TimerBottombo;
