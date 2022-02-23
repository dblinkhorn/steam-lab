import React from "react";

const VideoDetails = (props) => {
  console.log(props);
  const { video_title, video_url, video_resources } = props;

  return (
    <div className="videoDetails__outer-container">
      <div className="videoDetails__inner-container">
        <div className="videoDetails__title"> Video Title: {video_title}</div>
        <div className="videoDetails__video">Video URL: {video_url}</div>
        <div className="videoDetails__resources">Video Resources: {video_resources}</div>
      </div>
    </div>
  );
};

export default VideoDetails;
