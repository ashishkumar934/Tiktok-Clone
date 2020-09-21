import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, song, description, likes, comments, shares }) {
  const videoref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlevideopress = () => {
    //if video is playing pause it
    if (playing) {
      videoref.current.pause();
      setPlaying(false);
    } else {
      videoref.current.play();
      setPlaying(true);
    }
    // else play it
  };

  return (
    <div className="video">
      <video
        ref={videoref}
        onClick={handlevideopress}
        className="video_player"
        width="750"
        height="500"
        loop
      >
        <source src={url} />
      </video>
      <VideoFooter song={song} channel={channel} description={description} />
      <VideoSidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
}

export default Video;
