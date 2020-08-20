import React, { useState } from 'react';
import styled from 'styled-components';
import fileBHK from "assets/sounds/BAIHATKHOI-MASTERED.mp3"

let audioStream = new Audio(fileBHK)


export default function BaiHatKhoi( {onClose, isFocus}) {
    
    const [playStatus, setPlayStatus] = useState({})

    const play = () => {
        audioStream.play();
    }
    
    const pause = () => {
        audioStream.pause();
    }

    const stop = () => {
        audioStream.pause();
        audioStream.currentTime = 0;
    }

    return (
        <Div>
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
            <button onClick={stop}>Stop</button>
        </Div>
    );
}

const Div = styled.div`
    background: white;
    height: 100%;
    width: auto;
`