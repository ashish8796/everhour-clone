import React, { useEffect, useState } from "react";
import Bottombox from "../Components/Team/Bottombox";
import Mainbox from "../Components/Team/Mainbox";
import Middlebox from "../Components/Team/Middlebox";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addMemberData } from "../store/Team/action";

const Relative = styled.div`
  position: relative;
`;

const Abosulte = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 30px;
  top: 30px;

  button {
    width: fit-content;
    color: #fff;
    padding: 12px;
    margin-left: 20px;
    background-color: #24be6a;
    text-align: center;
    align-items: center;
    cursor: pointer;
    border-radius: 2px;
  }

  input {
    border-radius: 2px;
    border: 1px solid lightgray;
    padding: 12px;

    &:focus {
      border: 1px solid #24be6a;
    }
  }
`;

const TeamMembers = () => {
  const [member, setMember] = useState("");
  const dispatch = useDispatch();

  const addMembers = () => {
    if (member === "") {
      alert("input cannot be empty");
    } else {
      dispatch(addMemberData(member));
      setMember("");
    }
  };

  return (
    <MemberCont>
      <Relative>
        <Mainbox />

        <Abosulte>
          <input
            type="text"
            placeholder="add team member"
            value={member}
            onChange={(e) => setMember(e.target.value)}
          />
          <button onClick={addMembers}>Invite Members</button>
        </Abosulte>
      </Relative>

      <Middlebox />
      <Bottombox />
    </MemberCont>
  );
};

const MemberCont = styled.div`
  background-color: #fff;
  width: 82%;
  margin: 40px auto;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
`;

export default TeamMembers;
