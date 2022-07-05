import './aboutme.css';
import React from 'react';

function AboutMe() {
    return (
        <div className="aboutme" id='aboutme'>
            <div className='aboutmeContainer'>
                <div className='aboutmeHeader'>
                    <div className='title'>About Me</div>
                </div>
                <hr />
                <div className='splitContainer'>
                    <div className='left'>
                        <div className='profileInfo'>Profile</div>
                        <div className='profileName'>
                            <div className='profileTitle'>Name:</div>
                            <div>Samuel Han</div>
                        </div>
                        <div className='profileGrade'>
                            <div className='profileTitle'>Grade:</div>
                            <div>U3 (Rising Junior)</div>
                        </div>
                        <div className='profileEmail'>
                            <div className='profileTitle'>Email:</div>
                            <div>samuel.han@stonybrook.edu</div>
                        </div>
                        <div className='profileEducation'>
                            <div className='profileTitle'>Education:</div>
                            <div className='educationParagraph'>
                                <div className='paragraph'>Stony Brook University</div>
                                <div className='paragraph'>BS, Computer Science</div>
                            </div>
                        </div>
                        <div className='profileTitle profileCourses'>Relevant Courses:</div>
                        <ul>
                            <li>
                                CSE 114 Object Oriented Programming
                            </li>
                            <li>
                                CSE 214 Data Structures and Algorithms
                            </li>
                            <li>
                                CSE 215 Foundations of Computer Science
                            </li>
                            <li>
                                CSE 216 Programming Abstractions
                            </li>
                            <li>
                                CSE 220 System Fundamentals
                            </li>
                            <li>
                                CSE 303 Theory of Computation
                            </li>
                            <li>
                                CSE 316 Fundamentals of Software Development
                            </li>
                        </ul>
                    </div>
                    <div className='right'>
                        <div>
                            <div className='summary'>Brief Summary...</div>
                            <p>
                                My name is Samuel Han and I am a rising Junior as a computer science student.
                                I am currently in search for software engineering positions as I move towards my future career path.
                                I like to create and innovate and I am looking to explore various fields in computer science.
                            </p>
                        </div>
                        <div>
                            <p className='bottomParagraph'>
                                I enjoy working on personal projects in my free time to explore my interests
                                as I am passionate about computer science. You can see my projects <a id='rightProject' href='#projects'>here</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;