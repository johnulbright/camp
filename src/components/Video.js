import React from "react";
import { Player,ControlBar } from "video-react";
import first from "../assets/first.mov";

const Video = ({setVideoEnded}) => {
  return <Player onEnded={()=>setVideoEnded(true)} style={{border:"none"}} preload="auto" fluid playsInline autoPlay src={first}>
      <ControlBar disableCompletely={true}/>
  </Player>;
};

export default Video;
