import React from "react";
import styled from "styled-components";

export default function CreateMember({ member, handleOnChange }) {
  const { id, name } = member;
  return (
    <Label className="flex align-center">
      <input
        type="checkbox"
        value={id}
        name="users"
        onChange={handleOnChange}
      />
      <span>{name}</span>
    </Label>
  );
}

const Label = styled.label`
  margin: 5px 0;
  color: #444;

  input[type="checkbox"] {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;
