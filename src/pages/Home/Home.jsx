import React from 'react' 
import './Home.scss'
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Home = ()=>{

    return(
        <div className="home">
            <div className='home_wrap'>
                <div className='banner_wrap'>
                    <div className='center_bar'>
                        <span className='bar_before'></span>
                        <h2>Cold bREW</h2>

                    </div>
                    <div className="para_btn">
                        <div className='para'>

                            <p>
                                We source, roast and blend our coffee with passion. 
                            </p>
                            <p>we select our teas with love... buycof!</p>
                      </div>
                        
                        <Link to="/cafes" className='exp_link'>
                            <button>
                                explore
                            </button>
                        </Link>
                     
    
                    </div>
                </div>
                <div className="socials">
                    <XIcon className="social-icon"/>
                    <InstagramIcon className="social-icon"/>
                </div>

            </div>

        </div>
        )
}

export default Home; 