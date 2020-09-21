import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import { IconButton } from "@material-ui/core";

function VideoFooter({ channel, song, description }) {
  return (
    <div className="videofooter">
      <div className="videofooter_text">
        <h1> {channel}</h1>
        <p>{description}</p>
        <div className="videofooter_ticker">
          <IconButton>
            <MusicNoteIcon className="videofooter_icon" />
          </IconButton>
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videofooter_image"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
