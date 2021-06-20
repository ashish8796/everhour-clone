import React from "react";

export default function CreateButton({
  name = "",
  value = "",
  handleOnClick,
  label = "",
}) {
  return (
    <button onClick={handleOnClick} name={name} value={value}>
      {label}
    </button>
  );
}
