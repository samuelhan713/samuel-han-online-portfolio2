import './footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="footerContainer">
                <div className='copyright'>© 2022 Copyright: Samuel Han</div>
                <div className='vert'>|</div>
                <hr className='hr'/>
                <div className='footerEmail'><img id='email' src='https://tompfister.files.wordpress.com/2014/06/white-email-icon-png-u1nhol7t.png?w=600' /> samuel.han@stonybrook.edu</div>
                <div className='vert'>|</div>
                <hr className='hr'/>
                <div className='footerPhone'><img id='phone' src='https://icon-library.com/images/call-icon-vector/call-icon-vector-1.jpg' />010-5803-8211</div>
            </div>
        </div>
    )
}

export default Footer;