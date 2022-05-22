import './TechDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faRobot, faCode } from '@fortawesome/free-solid-svg-icons';

const iconStyling = {
    padding: '16px',
};

const TechDetails = () => {
    return (
        <div className='tech-details__container'>
            <div className='tech-details'>
                <div className='tech-details__left'>
                    <div className='desktop-icon'>
                        <FontAwesomeIcon
                            icon={faDesktop}
                            color='white'
                            size='2x'
                            style={iconStyling}
                        />
                    </div>
                    <div className='tech-details__text-container'>
                        <span className='tech-details__text'>
                            Engineering videos using Littlebits
                        </span>
                    </div>
                </div>
                <div className='tech-details__middle'>
                    <div className='robot-icon'>
                        <FontAwesomeIcon
                            icon={faRobot}
                            color='white'
                            size='2x'
                            style={iconStyling}
                        />
                    </div>
                    <div className='tech-details__text-container'>
                        <span className='tech-details__text'>
                            Robotics videos utilizing Ozobots
                        </span>
                    </div>
                </div>
                <div className='tech-details__right'>
                    <div className='coding-icon'>
                        <FontAwesomeIcon
                            icon={faCode}
                            color='white'
                            size='2x'
                            style={iconStyling}
                        />
                    </div>
                    <div className='tech-details__text-container'>
                        <span className='tech-details__text'>
                            Coding videos teach the use of The Coding Mouse
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechDetails;
