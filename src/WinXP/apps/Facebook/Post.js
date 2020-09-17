import React from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import PostCaption from "./PostCaption";
import PostAttachment from "./PostAttachment";
import PostReaction from "./PostReaction";
import PostComment from "./PostComment";

export default ({ post, onPostEnlarge }) => {
	return (
		<Post>
			<PostHeader
				created_time={post.created_time}
				story={post.story}
				icon={post.icon}
				permalink_url={post.permalink_url}
			/>
			<PostCaption caption={post.message} />
			<PostAttachment
				attachments={post.attachments}
				properties={post.properties}
				onPostEnlarge={onPostEnlarge}
			/>
			<PostReaction reactions={post.reactions} shares={post.shares} />
			<PostComment comments={post.comments} />
		</Post>
	);
};

const Post = styled.div`
	height: 500px;
	width: 100%;
	padding: 12px 12px 12px 12px;
	margin-bottom: 12px;
	align-content: center;
	font-family: system-ui, -apple-system, BlinkMacSystemFont,
		".SFNSText-Regular", sans-serif;
	border: 5px solid #d0ffcc; // FIXME:
	background: #21cbd2; // FIXME:
`;
