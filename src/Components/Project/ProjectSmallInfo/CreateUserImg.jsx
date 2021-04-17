import React from "react";
import styled from "styled-components";

export default function CreateUserImg({ user }) {
  console.log(user);

  return "avatarUrl" in user ? (
    <KnownImg style={{ width: "28px" }} src={user.avatarUrl} alt="" />
  ) : (
    <UnknownImg src="/assets/user.png" alt="user" />
  );
}

const Img = styled.img`
  width: 25px;
`;

const KnownImg = styled(Img)`
  border-radius: 50%;
`;

const UnknownImg = styled(Img)`
  width: 30px;
`;
