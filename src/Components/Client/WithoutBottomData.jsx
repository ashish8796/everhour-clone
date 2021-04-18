import React from "react";
import styled from "styled-components";

const WithoutData = styled.div`
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 70px;
    padding-top: 100px;
  }
`;

const WithoutBottomData = () => {
  return (
    <WithoutData>
      <div>
        <div>
          <img
            src="https://app.everhour.com/assets/img/icons/icon-empty-clients.svg"
            alt="empty person"
          />
        </div>
        <div>There are no clients yet.</div>
        <div>
          Create a client to aggregates several projects, set a budget and issue
          invoices.
        </div>
        <div>Click “Create Client” button and go ahead.</div>
      </div>
    </WithoutData>
  );
};

export default WithoutBottomData;
