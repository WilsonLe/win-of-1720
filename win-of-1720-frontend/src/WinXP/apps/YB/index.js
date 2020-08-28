import React from 'react';
import styled from 'styled-components'
import page from 'assets/YB-3.jpg'
export default ({ onClose, isFocus }) => {
    return (
        <Div>
            <img src={page} style={{width: "100%", display:"block", margin:"auto", pointerEvents:"none"}}></img>
            <img src={page} style={{width: "100%", display:"block", margin:"auto", pointerEvents:"none"}}></img>
            <img src={page} style={{width: "100%", display:"block", margin:"auto", pointerEvents:"none"}}></img>
            <img src={page} style={{width: "100%", display:"block", margin:"auto", pointerEvents:"none"}}></img>
            <img src={page} style={{width: "100%", display:"block", margin:"auto", pointerEvents:"none"}}></img>
            <img src={page} style={{width: "100%", display:"block", margin:"auto", pointerEvents:"none"}}></img>
            <img src={page} style={{width: "100%", display:"block", margin:"auto", pointerEvents:"none"}}></img>
            <img src={page} style={{width: "100%", display:"block", margin:"auto", pointerEvents:"none"}}></img>
            <img src={page} style={{width: "100%", display:"block", margin:"auto", pointerEvents:"none"}}></img>
            <img src={page} style={{width: "100%", display:"block", margin:"auto", pointerEvents:"none"}}></img>
        </Div>
    );
}

const Div = styled.div`
    height:100%;
    width:100%;
    background: white;
    overflow: scroll;
    align-content: center;
`
