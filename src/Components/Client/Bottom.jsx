import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import { postApi } from "../../api/api";
import { filterData } from "../../utils/filterData";
import Favourite from "../Project/ProjectSmallInfo/Favourite";

const ClientTable = styled.table`
  width: 100%;
  padding: 20px 0;
  background-color: #fff;

  th {
    font-size: 22px;
    font-weight: 600;
  }
`;

const Row = styled.tr`
  display: block;
  margin: 0 20px;
  padding: 10px 0;
  border-bottom: 1px solid #e9e9e9;

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 16px;
    margin: 0 15px 0 25px;
  }

  span {
    margin-right: 10px;
  }
`;

const ProjectSpan = styled.span`
  font-size: 14px;
  color: #666;
  line-height: 25px;
`;

const Logo = styled.div`
  margin-top: 6px;
  color: #444;
`;

const LoadingCont = styled.div`
  height: 50vh;

  h1 {
    font-size: 30px;
  }
`;

const Bottom = ({ query }) => {
  const { isLoading, isError, client } = useSelector(
    (state) => state.client,
    shallowEqual
  );

  console.log(client);
  React.useEffect(() => {
    client.map((el) => postApi(el.id, el.name));
  }, []);

  // const individualClient = filterData(client,query)
  // console.log(individualClient)

  const createRow = (client) => {
    const {
      name,
      createdAt,
      status,
      favorite,
      paymentDueDays,
      projects,
    } = client;

    return (
      <>
        <Row>
          <td className="flex">
            <Logo>
              <img src="/assets/Everhour_logo.svg" alt="logo" />
            </Logo>
            <div>
              <span>{name}</span>
              <Favourite status={favorite} />
              <br />
              <ProjectSpan>
                {projects.length ? projects.length : "No"} Projects
              </ProjectSpan>
            </div>
          </td>

          {/* <td>{status}</td> */}
          {/* <td>{createdAt}</td> */}
          {/* <td title="Payment due days">{paymentDueDays}</td> */}
        </Row>
      </>
    );
  };

  return isLoading ? (
    <LoadingCont className="flex justify-center align-center">
      <h1>...Loading</h1>
    </LoadingCont>
  ) : isError ? (
    <div>something went wrong</div>
  ) : (
    <div>
      <ClientTable>
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Created AT</th>
            <th>Favourite</th>
            <th>payment Due Days</th>
          </tr>
        </thead> */}

        <tbody>
          {filterData(client, query)?.map((client) => createRow(client))}
        </tbody>
      </ClientTable>
    </div>
  );
};

export default Bottom;
// useridSmith = 1019745
