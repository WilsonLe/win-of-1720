import React from "react";
import styled from "styled-components";

export default (props) => {
	if (props.attachments === undefined) return null;

	return (
		<PaddingContainer>
			<AttachmentContainer>
				<Img
					alt="Facebook img"
					src={props.attachments.data[0].media.image.src}
					width="100%"
					height="auto"
				/>
			</AttachmentContainer>
		</PaddingContainer>
	);
};

const PaddingContainer = styled.div`
	height: auto;
	padding: 0px 0px;
`;

const AttachmentContainer = styled.div`
	margin: 10px auto;
`;

const Img = styled.img``;
