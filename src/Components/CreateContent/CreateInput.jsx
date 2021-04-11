import React from "react";
import styled from "styled-components";

export default function CreateInput({
  type,
  name,
  value,
  label,
  handleOnChange = () => {},
  handleOnClick = () => {},
  required = false,
}) {
  return (
    <Label>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleOnChange}
        required={required}
      />
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;
