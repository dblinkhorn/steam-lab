import React from "react";
import "./VideoDetails.css";

const VideoDetails = (props) => {
  console.log(props);
  const { video_title, video_url, video_resources } = props;

  return (
    <div className="video-details__outer-container">
      <div className="video-details__inner-container">
        <div className="video-details__title">{video_title}</div>
        <div className="video-details__video">
          <video
            className="video-mask"
            playsInline
            controls
            style={{ opacity: 1, "width": "90%", "height": "90%" }}
          >
            <source src={video_url} type="video/mp4" />
          </video>
        </div>
        <div className="video-details__resources">
          <p>Additional Resources & Enrichment: {video_resources}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
