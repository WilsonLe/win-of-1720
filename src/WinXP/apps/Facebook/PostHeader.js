import React from "react";
import styled from "styled-components";
import Avatar from "../../../assets/facebookAvatar.png";

export default (props) => {
  // Avatar & name
  let _story = props.story ? props.story.slice(33) : "";
  return (
    <Header>
      <ProfilePicture alt="Avatar" src={Avatar} />
      <Origin>
        <div>
          <Homelink
            href="https://www.facebook.com/khoi12tdn"
            style={{ fontWeight: "bold" }}
          >
            17: /một • bảy • hai • không/
          </Homelink>
          <span>{_story}</span>
        </div>
        <Time href={props.permalink_url}>{props.created_time}</Time>
      </Origin>
    </Header>
  );
};

const Header = styled.div`
  font-family: inherit;
  width: 100%;
  background: red;
  height: auto;
  display: flex;
  flex-direction: row;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
`;

const Origin = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.1em;
  margin-left: 20px;
  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Homelink = styled.a`
  color: #2b4f93;
`;

const Time = styled.a`
  font-size: 0.8em;
  color: #90949c;
`;
