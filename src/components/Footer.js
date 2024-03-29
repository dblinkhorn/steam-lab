import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='footer__main'>
                <div className='footer__steam-lab'>
                    <span className='footer__section-title'>Site Links</span>
                    <ul>
                        <li>
                            <Link className='white' to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='white' to='/mission'>
                                Our Mission
                            </Link>
                        </li>
                        <li>
                            <Link className='white' to='/about'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className='white' to='/samples'>
                                Sample Lessons
                            </Link>
                        </li>
                        <li>
                            <Link className='white' to='/members'>
                                Members
                            </Link>
                        </li>
                        <li>
                            <Link className='white' to='/contact'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer__copyright'>
                ©2022 All Rights Reserved, Mr. Reed's STEAM Lab
            </div>
        </div>
    );
};

export default Footer;
