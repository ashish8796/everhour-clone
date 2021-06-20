import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Main = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  span {
    font-size: 25px;
  }

  button {
    font-size: 14px;
    border-radius: 2px;
    color: #fff;
    padding: 10px 15px;
    background-color: #24be6a;
    text-align: center;
    align-items: center;
  }
`;

const Mainbox = () => {
  const [showpop, setShowpop] = useState(false);

  return (
    <div>
      <Main className="primary-color">
        <span>Clients</span>
        <button onClick={() => setShowpop(true)}>Create Clients</button>
      </Main>
      {showpop ? <Modal setShowpop={setShowpop} /> : null}
    </div>
  );
};

export default Mainbox;
