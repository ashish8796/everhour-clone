import React, { useState } from "react";
import styled from "styled-components";
import CreateInput from "../CreateContent/CreateInput";

const initState = {
  name: "",
  type: "list",
  user: [],
  changeProtected: true,
};

export default function CreateProjectModal({ setIsModalVisible }) {
  const [projectData, setProjectData] = useState(initState);
  const [admin, setAdmin] = useState("everyone");

  const { name, type, user, changeProtected } = projectData;

  const handleOnChange = (e) => {
    let { type, name, value, checked } = e.target;
    console.log({ type, name, value, checked });

    setProjectData({ ...projectData, [name]: value });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // console.log(projectData);

  const handleSubmitForm = () => {};

  return (
    <ModalCont className={`flex justify-center align-center`}>
      <section
        className="background-white"
        style={{ borderRadius: "5px", overflow: "hidden" }}
      >
        <Heading className="flex justify-between">
          <h2>Create Project</h2>
          <button onClick={handleCloseModal} className="text-lightgray">
            X
          </button>
        </Heading>

        <Form>
          <div>
            <p>Project Name</p>
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <p>Layout</p>
            <input
              type="radio"
              value="list"
              name="type"
              checked={type === "list"}
              onChange={handleOnChange}
            />
            <RadioLabel htmlFor="list">list</RadioLabel>

            <input
              name="type"
              type="radio"
              id="board"
              value="board"
              checked={type === "board"}
              onChange={handleOnChange}
            />
            <RadioLabel htmlFor="board">board</RadioLabel>
          </div>

          <div>
            <p>Client</p>
          </div>

          <div>
            <p>Members</p>
          </div>

          <div>
            <p>Who Can Manage Tasks</p>
            <input
              type="radio"
              name="changeProtected"
              value="everyone"
              checked={admin === "everyone"}
              onChange={(e) => {
                setAdmin(e.target.value);
              }}
            />
            <RadioLabel>Everyone</RadioLabel>

            <input
              type="radio"
              name="changeProtected"
              value="admin"
              checked={admin === "admin"}
              onChange={(e) => {
                setAdmin(e.target.value);
              }}
            />
            <RadioLabel>Only admins</RadioLabel>
          </div>

          <div>
            <label>Project Name</label>
            <input type="text" onChange={handleOnChange} />
          </div>

          <Submit type="submit">Create Project</Submit>

          <Cancel className="text-lightgray" onClick={handleCloseModal}>
            Cancel
          </Cancel>
        </Form>
      </section>
    </ModalCont>
  );
}

const ModalCont = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #00000070;
  z-index: 100;
  transition: display 1s ease-in-out;
`;

const Form = styled.form`
  width: 35vw;
  padding: 0 30px;
  margin-top: 30px;

  input[type="text"] {
    width: 100%;
    border: 1px solid lightgray;
    padding: 10px;
    font-size: 18px;
    border-radius: 2px;
    margin: 5px 0;
    color: #444;

    &:focus {
      border: 1px solid #19b35e;
    }
  }

  div {
    margin: 20px 0;
    p {
      margin-bottom: 5px;
      font-size: 16px;
      line-height: 22px;
      color: #444;
    }
  }
`;

const Heading = styled.div`
  font-size: 25px;
  background-color: #fafafa;
  padding: 10px 30px;

  button {
    font-size: 30px;
  }
`;

const RadioLabel = styled.label`
  margin: 0 30px 0 10px;
  color: #444;
`;

const Submit = styled.button`
  background-color: #19b35e;
  height: fit-content;
  padding: 13px 20px;
  border-radius: 2px;
  color: white;
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 30px;

  &:hover {
    opacity: 1;
  }
`;

const Cancel = styled.button`
  margin-left: 30px;
  font-size: 17px;
`;
