import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Post from "./Post";
import postsDB from "./postDB";

export default () => {
  let posts = postsDB.slice(0, 10);
  console.log(posts.length);
  function onPostEnlarge() {}

  return (
    <Facebook>
      <Feed>
        {posts.map((post) => (
          <LazyLoad key={post.id}>
            <Post
              key={post.id}
              postData={post}
              onPostEnlarge={onPostEnlarge}
            ></Post>
          </LazyLoad>
        ))}
      </Feed>
    </Facebook>
  );
};

const Facebook = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(222, 222, 222);
  overflow: scroll;
  align-content: center;
`;

const Feed = styled.div`
  margin: auto;
  width: 60vw;
  background: rgb(255, 235, 235);
`;
