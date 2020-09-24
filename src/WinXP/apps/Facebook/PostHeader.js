import React from "react";
import styled from "styled-components";
import Avatar from "../../../assets/facebookAvatar.png";

// TODO: self implement show-more-text

export default (props) => {
	// Avatar & name
	let _story = props.story ? props.story.slice(33) : "";
	return (
		<PaddingContainer>
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
		</PaddingContainer>
	);
};

const PaddingContainer = styled.div`
	height: auto;
	padding: 0px 16px;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: auto;
	margin-bottom: 12px;
	/* background: #ffe8e6; */
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
	background-image: linear-gradient(
		to right,
		#f25022,
		#71af10,
		#3985b5,
		#ffb901
	);
	background-clip: text;
	color: transparent;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	/* color: #2b4f93; */
`;

const Time = styled.a`
	margin-top: 0.1rem;
	color: #90949c;
	font-size: 0.8em;
`;
