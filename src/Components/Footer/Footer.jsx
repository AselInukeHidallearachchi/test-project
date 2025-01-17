import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlayStoreIcon from '../../Assets/playstore.png'
import AppStoreIcon from '../../Assets/appstore.png'

import './Footer.css'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="footer-card-container">
                <div className='footer-card'>
                    <h3>Discover Deliveroo</h3>
                    <div className="links">
                        <Link to='/'>Investors</Link>
                        <Link to='/'>About us</Link>
                        <Link to='/'>Takeaway</Link>
                        <Link to='/'>More</Link>
                        <Link to='/'>Newsroom</Link>
                        <Link to='/'>Engineering Blog</Link>
                        <Link to='/'>Design Blog</Link>
                        <Link to='/'>Gift Cards</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Restaurant Signup</Link>
                        <Link to='/'>Become a rider</Link>
                        <Link to='/'>Deliveroo Talent Directory</Link>
                    </div>
                </div>
                <div className='footer-card'>
                    <h3>Legal</h3>
                    <div className="links">
                        <Link to='/'>Terms and conditions</Link>
                        <Link to='/'>Privacy</Link>
                        <Link to='/'>Cookies</Link>
                    </div>
                </div>
                <div className='footer-card'>
                    <h3>Help</h3>
                    <div className="links">
                        <Link to='/'>Contact</Link>
                        <Link to='/'>FAQs</Link>
                        <Link to='/'>Cuisines</Link>
                        <Link to='/'>Brands</Link>
                    </div>
                </div>
                <div className='footer-card'>
                    <h3>Take Deliveroo with you</h3>
                    <div className="links">
                        <Link to='/'>
                         <img src={PlayStoreIcon} alt="Play Store" style={{ maxWidth: '150px' }} />
                        </Link>
                        <Link to='/'>
                         <img src={AppStoreIcon} alt="App Store" style={{ maxWidth: '150px',marginTop: '8px' }} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='more-info'>
                <div className="socials">
                    <IconButton>
                        <FacebookIcon style={{ color: "#ffff" }} />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon style={{ color: "#ffff" }} />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon style={{ color: "#ffff" }} />
                    </IconButton>
                </div>
                <p className="footer-bottom-text">
                    © 2024 Deliveroo
                </p>
            </div>
        </footer>
    )
}

export default Footer;

