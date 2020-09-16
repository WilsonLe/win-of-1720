import React from "react";
import styled from "styled-components";
import yearbookPages from "./yearbookDB";

const Yearbook = ({ onClose, isFocus }) => {
  return (
    <Div>
      {yearbookPages.map(({ id, src }) => (
        <Page key={id} alt={"page-" + id} src={src} />
      ))}
    </Div>
  );
};

const Page = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  pointer-events: none;
`;

const Div = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  overflow: scroll;
  align-content: center;
`;
export default Yearbook;
