import React from "react";
import styled from "styled-components";
import Avatar from "../../../assets/facebookAvatar.png";

export default (props) => {
  // Avatar & name
  //
  return (
    <Header>
      <ProfilePicture alt="Avatar" src={Avatar} />
    </Header>
  );
};

const Header = styled.div`
  font-family: inherit;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
