import React, { useState } from 'react';
import VideoCard from '../VideoCard';
import './Members.css';
import { videos } from '../videoData';
import VideoDetails from '../VideoDetails';

const Members = () => {
    // updates state of shown videos & page heading
    const handleGradeButtonClick = (videos, heading) => {
        setShowVideos(videos);
        setVideosHeading(heading);
        setShowVideoDetails(null);
    };

    const handleVideoClick = (e) => {
        const videoID = e.currentTarget.getAttribute('video-index');
        console.log(showVideos[videoID]);
        setShowVideoDetails(
            <>
                <VideoDetails
                    video_title={showVideos[videoID].title}
                    // video_url={showVideos[videoID].video_url}
                    // video_resources={showVideos[videoID].video_resources}
                />
                <button
                    className='members__back-button'
                    onClick={() => setShowVideoDetails(null)}
                >
                    Back to Videos
                </button>
            </>
        );
    };

    // controls which grade's videos to show
    const [showVideos, setShowVideos] = useState(videos[0]);

    // controls heading to display depending on selected grade
    const [videosHeading, setVideosHeading] = useState('Kindergarten');

    // controls which video to display details page from user click
    const [showVideoDetails, setShowVideoDetails] = useState(null);

    return (
        <div className='members__container'>
            <div className='members__button-container'>
                {/* grades nav menu */}
                <ul className='members__grade-buttons'>
                    <li>
                        <button
                            className='members__button'
                            onClick={() => {
                                handleGradeButtonClick(
                                    videos[0],
                                    'Kindergarten'
                                );
                            }}
                        >
                            Kindergarten
                        </button>
                    </li>
                    <li>
                        <button
                            className='members__button'
                            onClick={() => {
                                handleGradeButtonClick(videos[1], 'Grade 1');
                            }}
                        >
                            Grade 1
                        </button>
                    </li>
                    <li>
                        <button
                            className='members__button'
                            onClick={() => {
                                handleGradeButtonClick(videos[2], 'Grade 2');
                            }}
                        >
                            Grade 2
                        </button>
                    </li>
                    <li>
                        <button
                            className='members__button'
                            onClick={() => {
                                handleGradeButtonClick(videos[3], 'Grade 3');
                            }}
                        >
                            Grade 3
                        </button>
                    </li>
                    <li>
                        <button
                            className='members__button'
                            onClick={() => {
                                handleGradeButtonClick(videos[4], 'Grade 4');
                            }}
                        >
                            Grade 4
                        </button>
                    </li>
                    <li>
                        <button
                            className='members__button'
                            onClick={() => {
                                handleGradeButtonClick(videos[5], 'Grade 5');
                            }}
                        >
                            Grade 5
                        </button>
                    </li>
                    <li>
                        <button
                            className='members__button'
                            onClick={() => {
                                handleGradeButtonClick(videos[6], 'Grade 6');
                            }}
                        >
                            Grade 6
                        </button>
                    </li>
                </ul>
            </div>
            {showVideoDetails ? (
                showVideoDetails
            ) : (
                <div className='members__videos-container'>
                    <div className='members__videos-content-container'>
                        <div className='members__heading'>{videosHeading}</div>
                        <div className='members__videos'>
                            {showVideos.map((video, index) => (
                                <VideoCard
                                    key={video.id}
                                    videoIndex={index}
                                    thumbnail={video.thumbnail}
                                    title={video.title}
                                    description={video.description}
                                    handleVideoClick={(event) => {
                                        handleVideoClick(event);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Members;
