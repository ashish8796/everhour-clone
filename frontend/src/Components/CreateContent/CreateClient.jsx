import React from "react";

export default function CreateClient({ client, index }) {
  const { name, id } = client;

  return <option value={id}>{name}</option>;
}
