import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { getYearbookDB } from "./yearbookDB";

export default () => {
	const refContainer = useRef(null);
	const [yearbookPages, setYearbookPages] = useState([]);

	useEffect(() => {
		let res = getYearbookDB();
		setYearbookPages(res);
	}, []);

	return (
		<Div ref={refContainer}>
			{yearbookPages.map((page) => (
				<LazyLoad
					overflow
					scrollContainer={refContainer}
					key={page.id}
					height={500}
					offset={4000}
				>
					<Page
						key={page.id}
						alt={"page-" + page.id}
						src={page.src}
					/>
				</LazyLoad>
			))}
		</Div>
	);
};

const Div = styled.div`
	height: 100%;
	width: 100%;
	background: white;
	overflow-y: scroll;
	align-content: center;
	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background: #fff;
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

const Page = styled.img`
	width: 100%;
	display: block;
	margin: auto;
	pointer-events: none;
`;
