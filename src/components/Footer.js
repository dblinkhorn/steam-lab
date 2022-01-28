import React from 'react';
import { Link } from 'react-router-dom';
import pencilKid from '../static/images/kid-pencil.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__main'>
        <div className='footer__logo'>
          <img src={ pencilKid } alt='kid on a pencil' />
          {/* <span className='footer_section-title'>Mr Reed's Steam Lab</span>
          <p>Where excitement and<br />learning come together</p> */}
        </div>
        <div className='footer__steam-lab'>
          <span className='footer_section-title'>Site Links</span>
          <ul>
            <li><Link className='white' to='/'>Home</Link></li>
            <li><Link className='white' to='/mission'>Our Mission</Link></li>
            <li><Link className='white' to='/about'>About Us</Link></li>
            <li><Link className='white' to='/offerings'>Offerings</Link></li>
            <li><Link className='white' to='/samples'>Sample Lessons</Link></li>
          </ul>
        </div>
        <div className='footer__legal'>
          <span className='footer_section-title'>Legal</span>
          <ul>
            <li><Link className='white' to='#'>Security</Link></li>
            <li><Link className='white' to='#'>Privacy Policy</Link></li>
            <li><Link className='white' to='#'>Terms &<br />conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className='footer__copyright'>
        ©2022 All Rights Reserved, mrreedsteamlab.com
      </div>
    </div>
  );
};

export default Footer;
