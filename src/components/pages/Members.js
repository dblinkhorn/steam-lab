import React, { useState, useEffect } from 'react';
import VideoCard from '../VideoCard';
import './Members.css';
import { videos } from '../videoData';
import VideoDetails from '../VideoDetails';
import Login from './Login';
import { passwords } from './secure';
import { Link } from 'react-router-dom';

const Members = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { grade } = props;

    // updates state of shown videos & page heading
    const handleGradeButtonClick = (videos, heading) => {
        setShowVideos(videos);
        setVideosHeading(heading);
        setShowVideoDetails(null);
    };

    const getHeading = grade => {
        const headings = [
            'Kindergarten',
            'Grade 1',
            'Grade 2',
            'Grade 3',
            'Grade 4',
            'Grade 5',
            'Grade 6',
            'Technology',
        ];
        return headings[grade];
    };

    const backButtonClicked = () => {
        setShowVideoDetails(null);
        window.scrollTo(0, 0);
    };

    const handleVideoClick = e => {
        const videoID = e.currentTarget.getAttribute('video-index');
        setShowVideoDetails(
            <>
                <VideoDetails
                    video_title={showVideos[videoID].title}
                    video_url={showVideos[videoID].url}
                    video_resource_url={showVideos[videoID].resource}
                />
                <button
                    className='members__back-button'
                    onClick={() => backButtonClicked()}>
                    Back to Videos
                </button>
            </>
        );
    };

    // controls which grade's videos to show
    const [showVideos, setShowVideos] = useState(videos[grade]);

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
    const handleLogIn = password => {
        passwords.forEach(validPassword =>
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
                            {videos.map((_, index) => (
                                <li
                                    key={getHeading(index)
                                        .replace(' ', '-')
                                        .toLowerCase()}>
                                    <Link
                                        to={`/members/${getHeading(index)
                                            .replace(' ', '-')
                                            .toLowerCase()}`}>
                                        <button
                                            className='members__button'
                                            onClick={() => {
                                                handleGradeButtonClick(
                                                    videos[index],
                                                    getHeading(index)
                                                );
                                            }}>
                                            {getHeading(index)}
                                        </button>
                                    </Link>
                                </li>
                            ))}
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
                                            handleVideoClick={event => {
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
