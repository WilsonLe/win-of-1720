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
			<PostBody>
				<PostHeader
					created_time={post.created_time}
					story={post.story}
					icon={post.icon}
					permalink_url={post.permalink_url}
				/>
				<PostCaption message={post.message} />
				<PostAttachment
					attachments={post.attachments}
					properties={post.properties}
					onPostEnlarge={onPostEnlarge}
				/>
			</PostBody>
			<PostFooter>
				<PostReaction reactions={post.reactions} shares={post.shares} />
				<PostComment comments={post.comments} />
			</PostFooter>
		</Post>
	);
};

const Post = styled.div`
	height: auto;
	width: 100%;
	margin-bottom: 12px;
	align-content: center;
	font-family: system-ui, -apple-system, BlinkMacSystemFont,
		".SFNSText-Regular", sans-serif;
	border: 5px solid #d0ffcc; // FIXME:
	background: #21cbd2; // FIXME:
`;

const PostBody = styled.div`
	padding-top: 12px;
`;

const PostFooter = styled.div`
	padding-bottom: 12px;
`;
