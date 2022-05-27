import React, { useState, useEffect } from 'react';
import VideoCard from '../VideoCard';
import './Members.css';
import { videos } from '../videoData';
import VideoDetails from '../VideoDetails';
import Login from './Login';
import { passwords } from './secure';

const Members = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // updates state of shown videos & page heading
    const handleGradeButtonClick = (videos, heading) => {
        setShowVideos(videos);
        setVideosHeading(heading);
        setShowVideoDetails(null);
    };

    const handleVideoClick = (e) => {
        const videoID = e.currentTarget.getAttribute('video-index');
        setShowVideoDetails(
            <>
                <VideoDetails
                    video_title={showVideos[videoID].title}
                    // video_url={showVideos[videoID].url}
                    video_resources={showVideos[videoID].resource}
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

    // controls whether user has typed a valid password
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // controls whether user has typed invalid password
    // used to display message to user
    const [invalidLogin, setInvalidLogin] = useState(false);

    useEffect(() => {
        setIsLoggedIn(JSON.parse(window.sessionStorage.getItem('isLoggedIn')));
    }, []);

    useEffect(() => {
        window.sessionStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    // checks if password input is valid password and updates state if so
    const handleLogIn = (password) => {
        passwords.forEach((validPassword) =>
            password === validPassword.toLowerCase()
                ? setIsLoggedIn(true)
                : setInvalidLogin(true)
        );
    };

    return (
        <>
            <div style={{ display: isLoggedIn ? 'none' : null }}>
                <Login
                    handleLogIn={handleLogIn}
                    invalidLogin={invalidLogin}
                    isLoggedIn={isLoggedIn}
                />
            </div>
            {isLoggedIn && (
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
                                        handleGradeButtonClick(
                                            videos[1],
                                            'Grade 1'
                                        );
                                    }}
                                >
                                    Grade 1
                                </button>
                            </li>
                            <li>
                                <button
                                    className='members__button'
                                    onClick={() => {
                                        handleGradeButtonClick(
                                            videos[2],
                                            'Grade 2'
                                        );
                                    }}
                                >
                                    Grade 2
                                </button>
                            </li>
                            <li>
                                <button
                                    className='members__button'
                                    onClick={() => {
                                        handleGradeButtonClick(
                                            videos[3],
                                            'Grade 3'
                                        );
                                    }}
                                >
                                    Grade 3
                                </button>
                            </li>
                            <li>
                                <button
                                    className='members__button'
                                    onClick={() => {
                                        handleGradeButtonClick(
                                            videos[4],
                                            'Grade 4'
                                        );
                                    }}
                                >
                                    Grade 4
                                </button>
                            </li>
                            <li>
                                <button
                                    className='members__button'
                                    onClick={() => {
                                        handleGradeButtonClick(
                                            videos[5],
                                            'Grade 5'
                                        );
                                    }}
                                >
                                    Grade 5
                                </button>
                            </li>
                            <li>
                                <button
                                    className='members__button'
                                    onClick={() => {
                                        handleGradeButtonClick(
                                            videos[6],
                                            'Grade 6'
                                        );
                                    }}
                                >
                                    Grade 6
                                </button>
                            </li>
                            <li>
                                <button
                                    className='members__button'
                                    onClick={() => {
                                        handleGradeButtonClick(
                                            videos[7],
                                            'Technology'
                                        );
                                    }}
                                >
                                    Technology
                                </button>
                            </li>
                        </ul>
                    </div>
                    {showVideoDetails ? (
                        showVideoDetails
                    ) : (
                        <div className='members__videos-container'>
                            <div className='members__videos-content-container'>
                                <div className='members__heading'>
                                    {videosHeading}
                                </div>
                                <div className='members__videos'>
                                    {showVideos.map((video, index) => (
                                        <VideoCard
                                            key={video.id}
                                            videoIndex={index}
                                            thumbnail={video.thumbnail}
                                            title={video.title}
                                            description={video.description}
                                            resource={video.resource}
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
            )}
        </>
    );
};

export default Members;
