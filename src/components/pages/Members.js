import React, { useState } from "react";
import VideoCard from "../VideoCard";
import "./Members.css";
import { videos } from "../videoData";
import VideoDetails from "../VideoDetails";

const Members = () => {
  // array of each video in selected grade
  const videosMap = (videos) => {
    return videos.map((video) => (
      <VideoCard
        key={video.id}
        dataIndex={video.id}
        thumbnail={video.thumbnail}
        title={video.title}
        description={video.description}
        handleVideoClick={(event) => {
          handleVideoClick(event);
        }}
      />
    ));
  };

  // updates state of shown videos & page heading
  const handleGradeButtonClick = (videos, heading) => {
    setShowVideos(videosMap(videos));
    setVideosHeading(heading);
  };

  const handleVideoClick = (e) => {
    const videoID = e.currentTarget.getAttribute("data-index");
    const currentVideos = showVideos;
    console.log(currentVideos);
    // setShowVideoDetails(
    //   <VideoDetails
    //     video_title={video_title}
    //     video_url={video_url}
    //     video_resources={video_resources}
    //   />
    // );
  };

  // controls state of which grade's videos to show
  const [showVideos, setShowVideos] = useState(videosMap(videos.kinder_videos));
  // controls states heading to display depending on selected grade
  const [videosHeading, setVideosHeading] = useState("Kindergarten");

  const [showVideoDetails, setShowVideoDetails] = useState(null);

  return (
    <>
      {showVideoDetails ? (
        showVideoDetails
      ) : (
        <div className="members__container">
          <div className="members__button-container">
            {/* grades nav menu */}
            <ul className="members__grade-buttons">
              <li>
                <button className="members__button">All Videos</button>
              </li>
              <li>
                <button
                  className="members__button"
                  onClick={() => {
                    handleGradeButtonClick(
                      videos.kinder_videos,
                      "Kindergarten"
                    );
                  }}
                >
                  Kindergarten
                </button>
              </li>
              <li>
                <button
                  className="members__button"
                  onClick={() => {
                    handleGradeButtonClick(videos.first_videos, "Grade 1");
                  }}
                >
                  Grade 1
                </button>
              </li>
              <li>
                <button
                  className="members__button"
                  onClick={() => {
                    handleGradeButtonClick(videos.second_videos, "Grade 2");
                  }}
                >
                  Grade 2
                </button>
              </li>
              <li>
                <button
                  className="members__button"
                  onClick={() => {
                    handleGradeButtonClick(videos.third_videos, "Grade 3");
                  }}
                >
                  Grade 3
                </button>
              </li>
              <li>
                <button
                  className="members__button"
                  onClick={() => {
                    handleGradeButtonClick(videos.fourth_videos, "Grade 4");
                  }}
                >
                  Grade 4
                </button>
              </li>
              <li>
                <button
                  className="members__button"
                  onClick={() => {
                    handleGradeButtonClick(videos.fifth_videos, "Grade 5");
                  }}
                >
                  Grade 5
                </button>
              </li>
              <li>
                <button
                  className="members__button"
                  onClick={() => {
                    handleGradeButtonClick(videos.sixth_videos, "Grade 6");
                  }}
                >
                  Grade 6
                </button>
              </li>
            </ul>
          </div>
          <div className="members__videos-container">
            <div className="members__videos-content-container">
              <div className="members__heading">{videosHeading}</div>
              <div className="members__videos">{showVideos}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Members;
