import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './VideoDetails.css';
import './Offerings.css';

const VideoDetails = props => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { video_title, video_url, video_resource_url } = props;

    const cloudFrontBaseVideoURL =
        'https://resources.mrreedsteamlab.com/steam-lab-videos/';

    const cloudFrontBaseResourcesURL =
        'https://resources.mrreedsteamlab.com/steam-lab-resources/';

    return (
        <div className='video-details__outer-container'>
            <div className='video-details__inner-container'>
                <div className='video-details__title'>{video_title}</div>
                <div className='video-details__video'>
                    <video
                        className='video-mask'
                        playsInline
                        controls
                        controlsList='nodownload'
                        style={{ opacity: 1, width: '100%' }}>
                        <source
                            src={cloudFrontBaseVideoURL + video_url}
                            type='video/mp4'
                        />
                    </video>
                </div>
                {/* technology videos have no additional resources; don't render this */}
                {video_resource_url ? (
                    <div className='video-details__resources'>
                        <div className='video-details__resources-text'>
                            Additional Resources & Enrichment:
                            <div className='video-details__resources-file'>
                                <a
                                    href={
                                        cloudFrontBaseResourcesURL +
                                        video_resource_url
                                    }
                                    target='_blank'>
                                    <FontAwesomeIcon
                                        icon={faFilePdf}
                                        color='black'
                                        size='1x'
                                    />
                                    <span className='video-details__resources-file-text'>
                                        {video_title}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default VideoDetails;
