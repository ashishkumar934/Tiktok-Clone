import React from "react";
import "./App.css";
import video1 from "./Nature_video.mp4";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app_video">
        <Video
          url={video1}
          song={"I love hare krishna kirtan only."}
          channel={"Ashish Kumar"}
          description={"Description"}
          likes={999}
          comments={344}
          shares={767}
        />
        <Video
          url={"./Nature_video.mp4"}
          song={"I love hare krishna kirtan only."}
          channel={"Ashish Kumar"}
          description={"Description"}
          likes={999}
          comments={344}
          shares={767}
        />
      </div>
    </div>
  );
}

export default App;
