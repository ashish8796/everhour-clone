import React from "react";
import styled from "styled-components";

export default function CreateInput({
  type,
  name = "",
  value,
  label = "",
  handleOnChange = () => {},
  handleOnClick = () => {},
  placeholder = "",
  required = false,
  handleOnFocus = () => {},
  handleOnBlur = () => {},
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
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  /* justify-content: space-between; */
`;
