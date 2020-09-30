import React, { useState } from "react";
import styled from "styled-components";

export default (props) => {
	if (props.message === undefined) return null;

	function cutText(txt) {
		let temp = txt.slice(0, 250);
		return temp.slice(0, temp.lastIndexOf(" ")) + "...";
	}

	const [show, setShow] = useState(false);
	let _caption;

	if (props.message.length <= 400) {
		_caption = <p>{props.message}</p>;
	} else {
		_caption = (
			<p>
				{show ? props.message : cutText(props.message)}{" "}
				<span
					onClick={() => {
						if (show === true) {
							props.scrollToTop();
						}
						setShow(!show);
					}}
					className="caption__seemore"
				>
					{show ? "\n\nSee less" : "See more"}
				</span>
			</p>
		);
	}

	return (
		<PaddingContainer>
			<Caption>{_caption}</Caption>
		</PaddingContainer>
	);
};

const PaddingContainer = styled.div`
	height: auto;
	padding: 0px 16px;
`;

const Caption = styled.div`
	margin: 8px 0px;
	/* background: #fff3e7; */
	font-family: inherit;
	p {
		color: #1c1e21;
		white-space: pre-line;
	}

	.caption__seemore {
		font-weight: 650;
		text-decoration: none;
		color: #050505;
		:hover {
			text-decoration: underline;
		}
		:active {
			color: #bbd8ff;
		}
	}
`;
