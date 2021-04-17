import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllProjects } from "../../api/api";
import { createAllProjects } from "../../store/projects/actions";
import CreateClient from "../CreateContent/CreateClient";
import CreateInput from "../CreateContent/CreateInput";
import CreateMember from "../CreateContent/CreateMember";

const initState = {
  name: "",
  type: "list",
  users: [],
  client: "Select client...",
};

export default function CreateProjectModal({ setIsModalVisible }) {
  const dispatch = useDispatch();
  const [isMember, setIsMember] = useState(false);
  const [admin, setAdmin] = useState("everyone");
  const { allClients } = useSelector((state) => state.client);
  const { allUsers, user } = useSelector((state) => state.user);
  console.log(allUsers);
  const [projectData, setProjectData] = useState({
    ...initState,
    users: [user.id],
  });

  const { name, type, users, client } = projectData;

  const handleOnChange = (e) => {
    let { type, name, value, checked } = e.target;

    if (type === "checkbox" && name === "users" && checked) {
      setProjectData({ ...projectData, [name]: [...users, Number(value)] });
    } else if (type === "checkbox" && name === "users" && !checked) {
      setProjectData({
        ...projectData,
        [name]: users.filter((id) => id !== value),
      });
    } else if (type === "select-one") {
      setProjectData({ ...projectData, [name]: Number(value) });
    } else {
      setProjectData({ ...projectData, [name]: value });
    }
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsModalVisible(false);
  };

  const handleSelectMember = (e) => {
    e.preventDefault();

    setIsMember(!isMember);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name,
        type,
        changeProtected: admin === "admin",
        client: client === "Select client..." ? null : client,
        users,
      };

      console.log(payload);

      if (payload.name) {
        await dispatch(createAllProjects(payload));
        setIsModalVisible(false);
      } else {
        alert("Please fill your project name");
      }
    } catch (error) {}
  };

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

        <Form onSubmit={handleSubmitForm}>
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
            <Select
              name="client"
              value={client}
              onChange={handleOnChange}
              className="border-lightgray primary-color"
            >
              <option value="Select client..." className="text-lightgray">
                Select client...
              </option>
              {allClients.map((client, i) => (
                <CreateClient key={client.id} client={client} index={i} />
              ))}
            </Select>
          </div>

          <MemberCont className="flex-column">
            <p>Members</p>

            <SelectMemberButton
              className="border-lightgray primary-color flex justify-between"
              onClick={handleSelectMember}
            >
              <span>
                {users.length === 1
                  ? `${user.name}`
                  : `${users.length} of ${[user, ...allUsers].length}`}
              </span>
              <span>&#9660;</span>
            </SelectMemberButton>

            {isMember && (
              <div style={{ position: "absolute" }}>
                <button
                  style={{
                    fontSize: "25px",
                    marginLeft: "auto",
                    display: "block",
                  }}
                  onClick={(e) => {
                    // e.stopPropagation();
                    setIsMember(false);
                  }}
                  className="text-lightgray"
                >
                  X
                </button>

                {[user, ...allUsers].map((user, i) => (
                  <CreateMember
                    key={i}
                    member={user}
                    handleOnChange={handleOnChange}
                  />
                ))}
              </div>
            )}
          </MemberCont>

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

const Select = styled.select`
  width: 100%;
  font-size: 14px;
  padding: 10px 5px;
  border-radius: 2px;
  outline: none;
  /* border: 1px solid lightgray; */
`;

const RadioLabel = styled.label`
  margin: 0 30px 0 10px;
  color: #444;
`;

const MemberCont = styled.div`
  position: relative;

  div {
    width: 100%;
    padding: 10px 0;
    top: 50px;
    z-index: 100;
    background-color: #fff;
  }
`;

const SelectMemberButton = styled.button`
  text-align: left;
  padding: 10px 5px;
  padding: 10px 5px;
  border-radius: 2px;
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
