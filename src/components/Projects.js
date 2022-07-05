import './projects.css';

function Projects() {
    return (
        <div className="projects" id='projects'>
            <div className='projectsContainer'>
                <div className='projectsHeader'>
                    <div className='title'>Projects</div>
                </div>
                <hr />
                <div className='projectsInnerContainer'>
                    <div className='projectName'>
                        <div className='dayLoggerHeader'>
                            <h3>Day Logger</h3>
                            <img id='dayLogger' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsj8SQ3o2UI8GpnynakXWHtTS_ckbuAPNxg&usqp=CAU' />
                        </div>
                        <div className='tools'>
                            React.js, Node.js, Express.js, MongoDB
                        </div>
                        <div className='dayLoggerBody'>
                            Implemented a full stack website that keeps track of daily activities based on questions and responses in a group of two
                        </div>
                        <div className='projectFooter'>
                            <a href="https://main--subtle-biscotti-65378e.netlify.app/loginpage" target="_blank">
                                <button className="projectLink" type="button">Project Link</button>
                            </a>
                        </div>
                    </div>
                    <div className='projectName'>
                        <div className='notesHeader'>
                            <h3>Notes</h3>
                            <img id='notes' src='https://i.pinimg.com/736x/9e/ec/3f/9eec3fda96dbca99e9b63e49d1e71c16.jpg' />
                        </div>
                        <div className='tools'>
                            React.js, Node.js, Express.js, MongoDB
                        </div>
                        <div className='notesBody'>
                            A full stack website that allows users to create, update, and view their personal notes
                        </div>
                        <div className='projectFooter'>
                            <a href="https://main--subtle-biscotti-65378e.netlify.app/loginpage" target="_blank">
                                <button className="projectLink" type="button">Project Link</button>
                            </a>
                        </div>
                    </div>
                    <div className='projectName'>
                        <div className='pacmanHeader'>
                            <h3>Pacman</h3>
                            <img id='pacman' src='https://www.freeiconspng.com/thumbs/pacman-png/pacman-png-18.png' />
                        </div>
                        <div className='tools'>
                            Java, Java Swing
                        </div>
                        <div className='pacmanBody'>
                            A Java implementation of the Pacman game using the following data structures: heaps, circularly-linkedlists, circular-deques
                        </div>
                        <div className='projectFooter'>
                            <a href="https://github.com/samuelhan713/Data-Structure-Assignments" target="_blank">
                                <button className="projectLink" type="button">Project Link</button>
                            </a>
                        </div>
                    </div>
                    <div className='projectName'>
                        <div className='snakeHeader'>
                            <h3>Snake</h3>
                            <img id='snake' src='https://cdn3.iconfinder.com/data/icons/flat-games-and-toys/16/19_game-toy-snake-videogame-videogame-512.png' />
                        </div>
                        <div className='tools'>
                            Java, Java Swing
                        </div>
                        <div className='snakeBody'>
                            A Java snake game implemented with the following data structures: dynamic arrays, deques.
                        </div>
                        <div className='projectFooter'>
                            <a href="https://github.com/samuelhan713/notes-app" target="_blank">
                                <button className="projectLink" type="button">Project Link</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;