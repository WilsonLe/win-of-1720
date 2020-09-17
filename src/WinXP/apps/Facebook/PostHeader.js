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
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  background: #ffd2cc;
  font-family: inherit;
`;

const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
`;

const Origin = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.3em;
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
  color: #90949c;
  font-size: 0.8em;
`;
