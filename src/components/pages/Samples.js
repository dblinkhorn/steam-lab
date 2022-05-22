import React from 'react';
import './Samples.css';

const Samples = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='samples__outer-container'>
            <div className='samples__inner-container'>
                <div className='samples__video-title'>Sample Video 1</div>
                <div className='samples__video'>
                    <video
                        className='video-mask'
                        playsInline
                        controls
                        style={{ opacity: 1, width: '100%' }}
                    >
                        <source
                            src='https://mrreedssteamlab.s3.us-west-1.amazonaws.com/K%20Umbrella%20.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJZTAMNFTJWN57ZJQ%2F20220208%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220208T071101Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=2f05e8d27bbf7c272d1f1dacd1cc9777102fb55d2458f9d9a6e6102fbbe9101a'
                            type='video/mp4'
                        />
                    </video>
                </div>
                <div className='samples__video-title'>Sample Video 2</div>
                <div className='samples__video'>
                    <video
                        className='video-mask'
                        playsInline
                        controls
                        style={{ opacity: 1, width: '100%' }}
                    >
                        <source
                            src='https://mrreedssteamlab.s3.us-west-1.amazonaws.com/K%20Umbrella%20.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJZTAMNFTJWN57ZJQ%2F20220208%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220208T071101Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=2f05e8d27bbf7c272d1f1dacd1cc9777102fb55d2458f9d9a6e6102fbbe9101a'
                            type='video/mp4'
                        />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Samples;
