import React from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import PostCaption from "./PostCaption";
import PostAttachment from "./PostAttachment";
import PostReaction from "./PostReaction";
import PostComment from "./PostComment";

export default ({ postData, onPostEnlarge }) => {
  return (
    <Post>
      <PostHeader
        created_time={postData.created_time}
        story={postData.story}
        icon={postData.icon}
        permalink_url={postData.permalink_url}
      />
      <PostCaption caption={postData.message} />
      <PostAttachment
        attachments={postData.attachments}
        properties={postData.properties}
      />
      <PostReaction reactions={postData.reactions} shares={postData.shares} />
      <PostComment comments={postData.comments} />
    </Post>
  );
};

const Post = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular",
    sans-serif;
  background: blue;
  height: 500px;
  width: 100%;
  overflow: scroll;
  align-content: center;
  padding: 12px 12px 12px 12px;
`;
