import React from 'react';
import styled from 'styled-components'
import yearbookFile from "assets/3ca.pdf"
import saveButton from "assets/saveButton.jpg";
export default ({ onClose, isFocus }) => {

    return (
        <Div>
            <a href={yearbookFile} download={yearbookFile}><Img atl="Download" src={saveButton}/></a>
            <P><span style={{color:"#F25022"}}>C</span><span style={{color:"#71AF10"}}>T</span><span style={{color:"#3985B5"}}>R</span><span style={{color:"#FFB901"}}>L</span> + S</P>
        </Div>
    );
}

const Div = styled.div`
    height:100%;
    width:100%;
    background: white;
    font-family: "SVN";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const P = styled.p`
    margin-top: 5vh;
    font-size: 3em;
    "&:active":{

    }
`

const Img = styled.img`
    height: 30vh;
    box-shadow: 9px 9px #999;
    :hover {
        box-shadow: 11px 11px #999;
        transform: translateY(-2px);
    }
    :active {
        box-shadow: 5px 5px #666;
        transform: translateY(4px);
    }
`