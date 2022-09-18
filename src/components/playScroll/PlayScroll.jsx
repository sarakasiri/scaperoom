import * as React from "react";
import "./styles/styles.css";
import { VideoScroll } from "react-video-scroll";
// import Video from "./video.mp4" ;


// const onScroll = (props) => {
//   const {videoEl , currentFrame , currentTime } = props
 
//   return videoEl.currentTime  = currentFrame
// }
  

const PlayScroll = () => {


  const setFrame = (props) => {
    const {duration , playbackRate } = props
   
    return window.pageYOffset / duration - playbackRate
  }

  const setStyles = (props) => {

    const {wrapperEl, videoEl, playbackRate , duration} = props
  
    wrapperEl.style.height = Math.floor(videoEl.duration) * playbackRate + "px"
  }
  
  return (
    <div className="App">
      <div className="wrapper" >
        <VideoScroll
         setCurrentFrame={setFrame}
         onLoad={setStyles}
          playbackRate={15}
          style={{ position: "sticky", top: "0"}}
        >
          <video
            // tabIndex={0}
            preload="preload"
            style={{ width: "100%", objectFit: "contain" }}
            playsInline
          >
            <source
              type="video/mp4"
              src="https://zarnik.co/legion.mp4"
              // src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
            />
          </video>
        </VideoScroll>
      </div>
    </div>
  );
}

export default PlayScroll ; 

