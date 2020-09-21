import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videosidebar">
      <div className="videosidebar_icon">
        {liked ? (
          <FavoriteIcon
            onClick={() => {
              setLiked(false);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={() => {
              setLiked(true);
            }}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videosidebar_icon">
        <MessageIcon />
        <p> {comments}</p>
      </div>
      <div className="videosidebar_icon">
        <ShareIcon />
        <p> {shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
