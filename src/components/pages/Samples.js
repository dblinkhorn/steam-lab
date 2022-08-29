import React, { useState, useEffect } from "react";
import "./Samples.css";
import "./Members.css";
import { videos } from "../videoData";
import VideoDetails from "../VideoDetails";
import VideoCard from "../VideoCard";
import Umbrella from "../../static/images/video_thumbs/kinder/umbrella.png";
import Catapults from "../../static/images/video_thumbs/fourth/catapults.png";

const Samples = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const backButtonClicked = () => {
        setShowVideoDetails(null);
        window.scrollTo(0, 0);
    };

    const handleVideoClick = e => {
        const videoIndex = e.currentTarget.getAttribute("video-index");
        setShowVideoDetails(
            <>
                <VideoDetails
                    video_title={
                        videoIndex === "0" ? "Design an Umbrella" : "Catapults"
                    }
                    video_url={showVideos[videoID].url}
                    video_resources={
                        videoIndex === "0"
                            ? videos[0][0].resource
                            : videos[4][1].resource
                    }
                />
                <button
                    className='members__back-button'
                    onClick={() => backButtonClicked()}>
                    Back to Videos
                </button>
            </>
        );
    };

    // controls which video to display details page from user click
    const [showVideoDetails, setShowVideoDetails] = useState(null);

    return (
        <div
            className={
                showVideoDetails
                    ? "samples__outer-container"
                    : "samples__outer-container footer_fill"
            }>
            <div className='samples__inner-container'>
                {!showVideoDetails && (
                    <div className='samples__video-title'>Sample Lessons</div>
                )}
                <div
                    className={
                        showVideoDetails
                            ? "samples__videos"
                            : "samples__videos cards-gap cards-padding"
                    }>
                    {showVideoDetails ? (
                        showVideoDetails
                    ) : (
                        <>
                            <VideoCard
                                key={videos[0][0].id}
                                videoIndex={0}
                                thumbnail={Umbrella}
                                title='Design an Umbrella'
                                description={videos[0][0].description}
                                handleVideoClick={event => {
                                    handleVideoClick(event);
                                }}
                            />
                            <VideoCard
                                key={videos[4][1].id}
                                videoIndex={1}
                                thumbnail={Catapults}
                                title='Catapults'
                                description={videos[4][1].description}
                                handleVideoClick={event => {
                                    handleVideoClick(event);
                                }}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Samples;
