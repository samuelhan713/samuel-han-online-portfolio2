import './topbar.css';

function TopBar() {
    return (
        <div className='topbar'>
            <div className='topbarContainer'>
                <a id='mainName' href='#home'>Samuel</a>
                <div className='topbarLeft'>
                    <a href='#aboutme'>ABOUT ME</a>
                    <a href='#experience'>EXPERIENCE</a>
                    <a href='#skills'>SKILLS</a>
                    <a href='#projects'>PROJECTS</a>
                </div>
            </div>
        </div>
    )
}

export default TopBar;