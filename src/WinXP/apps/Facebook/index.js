import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Post from "./Post";
import { getPostDB } from "./PostDB";

// TODO: move to serverless API

export default () => {
	const refContainer = useRef(null);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		let res = getPostDB();
		setPosts(res);
	}, []);

	function onPostEnlarge() {}

	return (
		<Facebook ref={refContainer}>
			<Feed>
				{posts.map((post) => (
					<LazyLoad
						overflow
						scrollContainer={refContainer}
						key={post.id}
						height={500}
						offset={4000}
					>
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
		background: #f0f2f5;
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

	.lazyload-wrapper {
		margin-bottom: 12px;
	}
`;
