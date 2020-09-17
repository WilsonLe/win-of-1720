import React from "react";
import styled from "styled-components";

export default (props) => {
	return (
		<Caption>
			<p>{props.message}</p>
		</Caption>
	);
};

const Caption = styled.div`
	margin: 8px 0px;
	background: #fff3e7;
	font-family: inherit;
	p {
		white-space: pre-line;
	}
`;
