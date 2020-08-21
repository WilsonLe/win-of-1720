import React, { useState } from 'react';
import styled from 'styled-components';
import fileBHK from "assets/sounds/BAIHATKHOI-MASTERED.mp3";
import mediaLogo from "assets/1720-logo.jpg";
import playButton from "assets/play-button.jpg"
import stopButton from "assets/stop-button.jpg";
import pauseButton from "assets/pause-button.jpg";

let audioStream = new Audio(fileBHK)
let audioTracker;


export default function BaiHatKhoi({ onClose, isFocus }) {

    const [playtime, setPlaytime] = useState({time:0});

    const play = () => {
        audioStream.play();
        audioTracker = setInterval(() => {
            setPlaytime({time:parseInt(audioStream.currentTime * 1000)})
        }, 1000);
    }

    const pause = () => {
        audioStream.pause();
        clearInterval(audioTracker);
    }

    const stop = () => {
        audioStream.pause();
        audioStream.currentTime = 0;
        clearInterval(audioTracker);
        setPlaytime({time:0});
    }

    return (
        <Div>
            <MediaCanvas>
                <img src={mediaLogo} alt="1720 Logo" width="auto" height="150vh"></img>
            </MediaCanvas>
            <TimeBar>
                <TimeBarProgress style={{width: playtime.time/parseInt(audioStream.duration*10) + "%"}}></TimeBarProgress>
            </TimeBar>
            <AudioControl>
                <img onClick={pause} src={pauseButton} alt="Pause" width="auto" height="40vh"></img>
                <img onClick={play} src={playButton} alt="Play" width="auto" height="50vh"></img>
                <img onClick={stop} src={stopButton} alt="Stop" width="auto" height="40vh"></img>
            </AudioControl>

        </Div>
    );
}

const Div = styled.div`
    background: white;
    height: 100%;
    width: auto;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 4fr 1fr 1fr;
`
const MediaCanvas = styled.div`
    grid-column: 2/2;
    grid-row:2/2;
    justify-self: center;
`

const AudioControl = styled.div`
    grid-column: 2/2;
    grid-row: 4/4;
    justify-self: center;
`
const TimeBar = styled.div`
    grid-column: 2/2;
    grid-row:3/3;
    background: #CBD7E8;
    height: 10px;
    width: 100%;
`
const TimeBarProgress = styled.div`
    grid-column: 2/2;
    grid-row:3/3;
    background: #162C49;
    height: 10px;
    width: 0%;
`