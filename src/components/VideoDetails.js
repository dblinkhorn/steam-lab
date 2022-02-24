import React from "react";
import "./VideoDetails.css";

const VideoDetails = (props) => {
  console.log(props);
  const { video_title, video_url, video_resources } = props;

  return (
    <div className="video-details__outer-container">
      <div className="video-details__inner-container">
        <div className="video-details__title">{video_title}</div>
        <div className="video-details__video">Video URL: {video_url}</div>
        <div className="video-details__resources">
          Video Resources: {video_resources}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
