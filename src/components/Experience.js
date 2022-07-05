import './experience.css';

function Experience() {
    return (
        <div className="experience" id='experience'>
            <div className='experienceContainer'>
                <div className='experienceHeader'>
                    <div className='title'>Relevant Experience</div>
                </div>
                <hr />
            </div>
            <div className='timelineContainer'>
                <div className='timeline'>
                    <ul className='bar'>
                        <li>
                            <div className='timeline-content'>
                                <div className='listHeader'>
                                    <h1>Matchbox Technologies Inc.</h1>
                                    <div className='date'>
                                        February 2019
                                    </div>
                                </div>
                                <p>Supported Matchbox's partnership roll out with Lawson convenience store by working with UI/UX developers to enhance the app's design/functionality</p>
                            </div>
                        </li>
                        <li>
                            <div className='timeline-content'>
                                <div className='listHeader'>
                                    <h1>Hackathon</h1>
                                    <div className='date'>
                                        April 2022
                                    </div>
                                </div>
                                <p>Planned and developed a working web application with 3 other teammates within 24 hours and presented it to a crowd and a panel of judges (HTML, CSS, JavaScript)</p>
                            </div>
                        </li>
                        <li id='lastExp'>
                            <div className='timeline-content'>
                                <div className='listHeader'>
                                    <h1>Teaching Assistant</h1>
                                    <div className='date'>
                                        TA date
                                    </div>
                                </div>
                                <p>- Assisted professor for computer science major class “Object Oriented Programming”</p>
                                <p>- Held 8.5 office hours per week - responded to inquiries and supported students on class material</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;