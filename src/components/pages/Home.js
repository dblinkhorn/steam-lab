import React from "react";
import { Link } from "react-router-dom";
import kidsHome from "../../static/images/kids-home.png";
import kidsHome2 from "../../static/images/kids-home2.png";
import redFlask from "../../static/images/red_flask.png";
import Offerings from "../Offerings";
import "./Home.css";
import "../../App.css";

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='home-container'>
                <div className='home-text'>
                    <p className='motto'>
                        Where Excitement
                        <br />
                        and Learning
                        <br />
                        <span className='blue-text'>Come Together</span>
                    </p>
                    <span className='description'>
                        Online STEAM video challenges to support students,
                        teachers, and expanded learning programs.
                    </span>
                    <div className='buttons__container'>
                        <div className='contact-button__container'>
                            <Link to='/contact'>
                                <button className='button-contact-us'>
                                    CONTACT US
                                </button>
                            </Link>
                        </div>
                        <div className='sample-button__container'>
                            <Link to='/samples'>
                                <button className='button-sample-lessons'></button>
                                <span className='button-sample-lessons__text'>
                                    Sample Lessons
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='kids-home'>
                    <img src={kidsHome} alt='Science Kids' />
                </div>
            </div>
            <div>
                <Offerings />
            </div>
            <div className='overview__container'>
                <div className='overview__title'>
                    <span className='overview__heading'>Overview</span>
                    <div className='red-flask'>
                        <img src={redFlask} alt='red flask' />
                    </div>
                </div>
                <div className='overview__content'>
                    <div className='overview__image'>
                        <img
                            className='kids-home2'
                            src={kidsHome2}
                            alt='children with laptops'
                        />
                    </div>
                    <div className='overview__text'>
                        <ul>
                            <li>Videos that support science curriculum</li>
                            <li>Perfect for expanded learning programs</li>
                            <li>Grade K-6 videos aligned to the NGSS</li>
                            <li>Encourage engagement with a STEAM challenge</li>
                            <li>
                                Activities created with a easy-to-find materials
                            </li>
                            <li>
                                Mr Reed demonstrates step-by-step instructions
                                in every video
                            </li>
                            <li>Six short videos per grade level</li>
                            <li>
                                Resources for extending and enriching student
                                learning
                            </li>
                            <li>Engineering videos using Littlebits</li>
                            <li>Robotics videos utilizing Ozobots</li>
                            <li>
                                Coding videos teach the use of The Coding Mouse
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
