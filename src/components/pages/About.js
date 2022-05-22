import React from 'react';
import './About.css';
import JoePhoto from '../../static/images/joe_reed.jpg';
import TishPhoto from '../../static/images/tish_reed.jpg';

const About = () => {
    return (
        <div className='about__container'>
            <div className='about__heading-container'>
                <span className='about__heading'>About Us</span>
            </div>
            <div className='about__joe-container'>
                <div className='about__joe-image'>
                    <img src={JoePhoto} alt='Joe Reed' />
                    <p className='about__name-text'>Joe Reed</p>
                </div>
                <div className='about__text'>
                    <p className='about__body-text'>
                        Joe Reed was a classroom teacher for 35 years. He
                        designed individualized educational programs in the
                        Burbank Community for over 35 years. He holds a Multiple
                        Subject Teaching Credential, Special Education
                        Credential, and a Clinical Rehabilitative Credential,
                        Language Speech and Hearing. He also holds a Masters
                        Degree in Administration and an Administrative
                        Credential. He was selected National Science Fellow by
                        the National Science Foundation and has also been named
                        Teacher of the Year by the Los Angeles Times. He now
                        consults with schools and school districts to help them
                        create STEAM labs and Makerspace Rooms. He also trains
                        teachers and students in robotics and coding.
                    </p>
                </div>
            </div>
            <div className='about__tish-container'>
                <div className='about__tish-image'>
                    <img src={TishPhoto} alt='Tish Reed' />
                    <p className='about__name-text'>Tish Reed</p>
                </div>
                <div className='about__text'>
                    <p className='about__body-text'>
                        Tish Reed was an elementary teacher for 25 years. She
                        has taught all grade levels K-5 and spent the last five
                        years of her career as a Curriculum Specialist. She
                        holds a Multiple Subject Teaching Credential and was
                        selected as Burbank Unified School District's Elementary
                        Teacher of the Year. She works alongside Joe helping to
                        create standards based, hands on learning experiences
                        for students.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
