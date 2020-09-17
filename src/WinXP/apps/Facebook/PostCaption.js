import React, { useState } from "react";
import styled from "styled-components";

export default (props) => {
	if (props.message === undefined) return null;

	function cutText(txt) {
		return txt.slice(0, 250).slice(0, txt.lastIndexOf(" ")) + "...";
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
						setShow(!show);
					}}
				>
					{show ? "See less" : "See more"}
				</span>
			</p>
		);
	}

	return <Caption>{_caption}</Caption>;
};

const Caption = styled.div`
	margin: 8px 0px;
	background: #fff3e7;
	font-family: inherit;
	p {
		white-space: pre-line;
		span {
			font-weight: bold;
			text-decoration: none;
			color: #0000ff;
			:hover {
				text-decoration: underline;
			}
			:active {
				color: #bbd8ff;
			}
		}
	}
`;
