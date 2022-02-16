import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCut, faVideo, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import './Offerings.css'

const iconStyling = {
  padding: '16px'
}

const Offerings = () => {
  return (
    <div className='offerings__container'>
        <div className='offerings'>
          <div className='offerings-left'>
            <div className='video-icon'>
              <FontAwesomeIcon icon={ faVideo } color='white' size='2x' style={ iconStyling } />
            </div>
            <div className='offerings__text'>
              <span className='offerings__large-text'>Videos</span>
              <span className='offerings__small-text'>42 challenge videos (six per grade-level, Kindergarten through sixth)</span><br />
            </div>
          </div>
          <div className='offerings-center'>
            <div className='file-icon'>
              <FontAwesomeIcon icon={ faFileAlt } color='white' size='2x' style={ iconStyling } />
            </div>
            <div className='offerings__text'>
              <span className='offerings__large-text'>Resources</span>
              <span className='offerings__small-text'>Additional teacher resource documents for extension and enrichment</span>
            </div>
          </div>
          <div className='offerings-right'>
            <div className='scissors-icon'>
              <FontAwesomeIcon icon={ faCut } color='white' size='2x' style={ iconStyling } />
            </div>
            <div className='offerings__text'>
              <span className='offerings__large-text'>Materials</span>
              <span className='offerings__small-text'>Designed for simple implementation with easy-to-find materials</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Offerings;
