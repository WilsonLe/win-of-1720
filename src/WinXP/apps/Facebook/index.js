import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Post from "./Post";
import { getPostDB } from "./PostDB";

export default () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		let res = getPostDB();
		setPosts(res);
	}, []);

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
	background: #f0f2f5;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background: #dadde1;
	}

	::-webkit-scrollbar-thumb {
		background: linear-gradient(
			to bottom,
			#dadde1,
			#f25022,
			#71af10,
			#3985b5,
			#ffb901,
			#dadde1
		);
	}
`;

const Feed = styled.div`
	margin: 60px auto;
	padding: 12px 10px;
	/* width: 60vw; //FIXME: responsive */
	width: 100%;
	max-width: 800px;
	background: #f0f2f5; //FIXME:
`;