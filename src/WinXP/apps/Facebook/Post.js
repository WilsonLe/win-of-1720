import React, { useRef } from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import PostCaption from "./PostCaption";
import PostAttachment from "./PostAttachment";
import PostReaction from "./PostReaction";
import PostComment from "./PostComment";

export default ({ post, onPostEnlarge }) => {
	const ref = useRef(null);

	function scrollToTop() {
		ref.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}

	return (
		<Post ref={ref}>
			<PostBody>
				<PostHeader
					created_time={post.created_time}
					story={post.story}
					icon={post.icon}
					permalink_url={post.permalink_url}
				/>
				<PostCaption message={post.message} scrollToTop={scrollToTop} />
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
	align-content: center;
	font-family: system-ui, -apple-system, BlinkMacSystemFont,
		".SFNSText-Regular", sans-serif;
	font-size: 15px;
	border-radius: max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	background: #ffffff;
	/* border: 5px solid #d0ffcc; // FIXME: */
	/* background: #21cbd2; // FIXME: */
`;

const PostBody = styled.div`
	padding-top: 12px;
`;

const PostFooter = styled.div`
	padding-bottom: 12px;
`;
