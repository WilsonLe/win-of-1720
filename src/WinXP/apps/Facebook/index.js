import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Post from "./Post";
import postsDB from "./postDB";

export default () => {
	let posts = postsDB.slice(0, 10);

	function onPostEnlarge() {}

	return (
		<Facebook>
			<Feed id="Feed">
				{posts.map((post) => (
					<LazyLoad key={post.id}>
						<Post
							key={post.id}
							post={post}
							onPostEnlarge={onPostEnlarge}
						/>
					</LazyLoad>
				))}
			</Feed>
		</Facebook>
	);
};

const Facebook = styled.div`
	height: 100%;
	width: 100%;
	background: white;
	overflow-y: scroll;
`;

const Feed = styled.div`
	margin: 60px auto;
	padding: 12px 12px;
	/* width: 60vw; //FIXME: responsive */
	width: 100%;
	background: #dadde1; //FIXME:
`;
