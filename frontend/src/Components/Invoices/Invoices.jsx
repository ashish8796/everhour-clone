import React, { useState } from "react";
import styled from "styled-components";
import MainpageNav from "../MainpageNavbar/MainpageNav";
import { CreateInvoice } from "./CreateInvoice/CreateInvoice";

const Invoices = () => {
  const [showCreateInvoiceBox, setShowCreateInvoiceBox] = useState(false);

  return (
    <Container>
      <div>
        <Steps>
          <h1>Invoicing data will appear here</h1>
          <div>
            <h2>01</h2>
            <div>
              <h3>Set billing rates</h3>
              <p>
                Start by inviting all your teammates and then configure their
                billing rates. Zero rate states for non-billable time.
              </p>
            </div>
          </div>

          <div>
            <h2>02</h2>
            <div>
              <h3>Create your first client</h3>
              <p>
                Each client has projects, individual invoice settings and you
                can also override default team rates.
              </p>
            </div>
          </div>

          <div>
            <h2>03</h2>
            <div>
              <h3>Create your first invoice</h3>
              <p>
                Having members with billing rates, clients with projects which
                have a billable status and logged time, you can create your
                invoice.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setShowCreateInvoiceBox(true);
            }}
          >
            Create an Invoice
          </button>
        </Steps>
      </div>
      {showCreateInvoiceBox ? (
        <CreateInvoice setShowCreateInvoiceBox={setShowCreateInvoiceBox} />
      ) : null}
    </Container>
  );
};

export { Invoices };

const Container = styled.div`
  font-family: "Lato", sans-serif;
  background-color: #fafafa;
  width: 82%;
  margin: auto;
  border: 1px solid lightgray;
  background-color: white;
  padding: 30px;
  margin-top: 40px;
  border-radius: 5px;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  & > div {
    display: flex;
    min-width: 80%;
    margin: 10px 0px;
    padding: 10px;
    div {
      flex-basis: 86%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      h3 {
        font-size: 24px;
        color: #333;
        padding: 10px 0;
      }

      p {
        line-height: 25px;
        font-size: 18px;
        color: #767676;
      }
    }
  }

  h1 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 26px;
    color: #444;
  }

  h2 {
    font-size: 66px;
    color: #12a252;
    flex-basis: 13%;
  }

  button {
    width: 24%;
    border-radius: 3px;
    margin-top: 10px;
    margin-left: 13%;
    background-color: #12a252;
    color: white;
    font-size: 14px;
    padding: 13px 0;
  }
`;
