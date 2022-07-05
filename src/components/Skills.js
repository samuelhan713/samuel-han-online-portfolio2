import './skills.css';
import React from 'react';
import ProgressBar from './ProgressBar';

const data = [
    { bgcolor: "black", completed: 100 },
    { bgcolor: "black", completed: 85 },
    { bgcolor: "black", completed: 90 },
];
function Skills() {
    return (
        <div className="skills" id='skills'>
            <div className='skillsContainer'>
                <div className='skillsHeader'>
                    <div className='title'>Skills</div>
                </div>
                <hr />
                <div className='splitContainer'>
                    <div className='skillsLeft'>
                        <div className='leftTitle'>Technical Skills</div>
                        <div className='skillsLeftBody'>
                            <div className='skillsLeftBodyInner'>
                                <div className='skillTitle'>Programming Languages:</div>
                                <div className='skill'>Java • Python • C • JS • MIPS</div>
                            </div>
                            <div className='skillsLeftBodyInner'>
                                <div className='skillTitle'>Frameworks/envs:</div>
                                <div className='skill'>React.js • Node.js • Express.js</div>
                            </div>
                            <div className='skillsLeftBodyInner'>
                                <div className='skillTitle'>Database:</div>
                                <div className='skill'>MongoDB</div>
                            </div>
                            <div className='skillsLeftBodyInner'>
                                <div className='skillTitle'>Misc:</div>
                                <div className='skill'>Microsoft Excel • Final Cut Pro</div>
                            </div>
                        </div>
                    </div>
                    <div className='skillsRight'>
                        <div className='rightTitle'>Other Skills</div>
                        <div className='skillTitle'>Languages:</div>
                        <div className='rightSkillsBody'>
                            <div className='languages'>
                                <div className='lang'>English</div>
                                <div className='lang'>Korean</div>
                                <div className='lang'>Japanese</div>
                            </div>
                            <div className='progress'>
                                {data.map((item, idx) => (
                                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;