import './home.css';

function Home() {
    return (
        <div className="home" id='home'>
            <div className='homeContainer'>
                <img id='profilePic' src='assets/me.JPG' />
                <div className='name'>Samuel Han</div>
                <div className='subtitle'>A computer science student</div>
                <div className='links'>
                    <a href='https://github.com/samuelhan713' target="_blank"><img className='icons' src='https://cdn-icons-png.flaticon.com/512/38/38401.png?w=360' /></a>
                    <a href='https://www.linkedin.com/in/samuel-seukhyun-han/' target="_blank"><img className='icons' src='https://www.nicepng.com/png/detail/461-4616944_linkedin-logo-png-linked-in-icon-svg.png' /></a>
                </div>
            </div>
        </div>
    )
}

export default Home;