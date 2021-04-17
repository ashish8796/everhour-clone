import React from "react";

export default function CreateClient({ client, index }) {
  const { name, id } = client;

  return index ? (
    <option value={id}>{name}</option>
  ) : (
    <option value={id}>{name}</option>
  );
}
