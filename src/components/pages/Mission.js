import React from 'react';
import RocketLogo from '../../static/images/rocket_logo.png';
import ChemistryGirls from '../../static/images/chemistry-girls.jpg';
import KidsReading from '../../static/images/kids_reading.jpg';
import './Mission.css';

const Mission = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='mission__container'>
            <div className='mission__image-container'>
                <div className='mission__image-our-mission'>
                    <img src={RocketLogo} alt='Rocket logo' />
                </div>
                <div className='mission__text'>
                    <div className='mission__heading-container-our-mission'>
                        <span className='mission__heading'>Our Mission</span>
                    </div>
                    <p className='mission__body-text'>
                        Welcome to Mr. Reed's STEAM Lab! We are excited to share
                        what we've created with you and your students. Joe and
                        Tish Reed are retired educators with over 60 years
                        experience between them. They share a passion for
                        anything and everything science. Joe loves to ignite the
                        curiosity of students with hands-on, inquiry-based
                        explorations and Tish loves to find ways to integrate
                        science into all subject areas. Joe and Tish have
                        compiled STEAM challenges and activities to support
                        classroom teachers and Expanded Learning facilitators.
                        Consideration has been made for ease of finding
                        materials and the goal is that activities can be
                        completed easily. Step-by-step instructions are given in
                        the videos. Some videos also contain a literature or art
                        component. Along with each video there is a “Teacher
                        Resources” document. The resources include links to
                        non-fiction text and additional videos, and where
                        applicable, math, art, and music activities. There are
                        numerous resources online, but our goal was to gather a
                        few resources to help teachers support and extend the
                        STEAM lesson videos, without them having to take the
                        time to do hours of searching on their own.
                    </p>
                </div>
            </div>
            <div className='mission__image-container'>
                <div className='mission__image-learning-loss'>
                    <img src={ChemistryGirls} alt='Girls in chemistry class' />
                </div>
                <div className='mission__text'>
                    <div className='mission__heading-container-learning-loss'>
                        <span className='mission__heading'>Learning Loss</span>
                    </div>
                    <div className='mission__body-text'>
                        <div>
                            <p className='mission__section-heading'>
                                What is Learning Loss?
                            </p>
                            <p>
                                Almost everything that researchers know that
                                affects learning indicates that children may
                                have deficits due to Covid-19 educational
                                changes. Time on task, online learning,
                                absenteeism, and summer learning loss all create
                                a need for intervention and the challenge of
                                bringing students back up to grade level.
                            </p>

                            <p className='mission__section-heading'>
                                Addressing Learning Loss
                            </p>
                            <p>
                                A study at the University of Michigan looked at
                                learning loss and how to remediate. One of the
                                primary goals was to increase student
                                engagement. The methodology was project based
                                instruction. This is an approach to education in
                                which students explore academic subjects through
                                meaningful explorations that pique their
                                interests as they seek to solve real-world
                                problems. After receiving project-based
                                instruction, the University of Michigan
                                researchers found that second grade students
                                gained five to six months learning in social
                                studies and two months in informational reading.
                                Included in these groups were students from
                                low-income backgrounds and from underrepresented
                                racial and ethnic groups.
                            </p>
                            <p>
                                Mr Reed's STEAM Lab video program poses real
                                world challenges and asks students to come up
                                with creative ways to solve these problems. Once
                                the students are engaged, the teacher has access
                                to links for over eighty-five informational
                                texts. Students are eager to engage in these
                                non-fiction texts because they have been so
                                motivated by the high interest challenges.
                            </p>

                            <p>
                                Mr Reed's STEAM Lab video program allows schools
                                and teachers to decide how they best want to
                                approach the issue of learning loss. Some
                                researchers feel that students should be
                                presented grade level material and moved
                                forward. Other philosophies suggest that
                                students need to fill in gaps missed during
                                distance learning by providing material from
                                previous years. Mr Reed's STEAM Lab video
                                program provides flexibility in that they may be
                                used to address both philosophies.
                            </p>
                        </div>
                    </div>
                    {/* <div className='video__container'>
            <video playsInline controls style={{opacity: 1, maxWidth: 1200, maxHeight: 500}}>
              <source src="https://mrreedssteamlab.s3-us-west-1.amazonaws.com/Our+Philosophy.mp4" type="video/mp4" />
            </video>
          </div> */}
                </div>
            </div>
            <div className='mission__image-container'>
                <div className='mission__image-english-learners'>
                    <img src={KidsReading} alt='Kids reading' />
                </div>
                <div className='mission__text'>
                    <div className='mission__heading-container-english-learners'>
                        <span className='mission__heading'>
                            English Learners
                        </span>
                    </div>
                    <div className='mission__body-text'>
                        <div>
                            <p className='mission__section-heading'>
                                Transforming Classrooms, Schools, and Lives
                            </p>
                            <p>
                                English Language learners consist of a diverse
                                group of students who typically lack access to
                                Science, Technology, Engineering, and Math
                                (STEM) opportunities. A new report by the
                                National Academies of Sciences and Engineering
                                states that a shift is needed in how STEM is
                                taught to English Learners.
                            </p>

                            <p>
                                Often these students are denied access to STEM
                                learning opportunities. The report states that
                                language and content are learned concurrently
                                and not separately or consecutively. As such,
                                English Learners need STEM experiences early in
                                their education when their peers are gaining
                                exposure to STEM content. The suggestion is that
                                curriculum developers should work to develop
                                materials and resources that target English
                                Language Learners. With appropriate curriculum,
                                these students can participate, contribute and
                                succeed in STEM classrooms.
                            </p>

                            <p>
                                Education Week reported in 2018 that school
                                systems across the country should do more to
                                ensure that current and former English-language
                                learners have access to STEM education. “Too
                                often schools operate under the incorrect
                                assumption that proficiency in English is a
                                prerequisite to meaningful engagement with STEM
                                learning and fail to leverage ELs meaningful
                                engagement with content and disciplinary
                                practices as a route to language proficiency,”
                                the report authors wrote. The study also found
                                that, “Recognition of the assets that ELs bring
                                to the classroom, and that some deficits in
                                student performance arise from lack of access
                                rather than limited ability or language
                                proficiency, or from cultural differences.
                            </p>

                            <p>
                                EdSurge research found that obstacles to English
                                learners participating in STEM subjects and
                                careers do not include lack of interest or
                                ability, according to the report, “English
                                Learners in STEM Subjects: Transforming
                                Classrooms, Schools and Lives.” Rather, it stems
                                from a lack of access to rigorous,
                                age-appropriate instruction in the field. The
                                problem can be attributed to a variety of
                                reasons; one is that many schools assume English
                                learners cannot participate in rigorous STEM
                                content learning before reaching a certain level
                                of English proficiency—an assumption that
                                research has disproven, according to the
                                authors.
                            </p>

                            <p>
                                Mr Reed's Steam Lab video challenges are
                                designed to give an immersive experience that EL
                                students can access, enjoy, and in which they
                                can experience success. Each activity is
                                designed with a specific grade level in mind,
                                however teachers may use their discretion when
                                it comes to assigning or using the videos. Many
                                of the literacy resources may be adjusted for
                                different levels of reading ability.
                            </p>

                            <cite className='citation'>
                                National Academies of Sciences, Engineering, and
                                Medicine. 2018. English Learners in STEM
                                Subjects: Transforming Classrooms, Schools, and
                                Lives. Washington, DC: The National Academies
                                Press.
                                <br />
                                Source:{' '}
                                <a href='https://doi.org/10.17226/25182'>
                                    https://doi.org/10.17226/25182
                                </a>
                                .
                            </cite>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
