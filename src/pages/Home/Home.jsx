import React from 'react' 
import './Home.scss'
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Slider from '../../components/Slider/Slider';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = ()=>{

   

    return(


        <div id="home-wrapper">
            <Navbar/>
                
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
                            
                        <div className="socials">
                            <Link to='https://www.twitter.com/im_walt2' className='home-social--btn'> <XIcon className="social-icon"/></Link>
                            <Link to='https://www.instagram.com/im_walt' className='home-social--btn'><InstagramIcon className="social-icon"/></Link>


                            <Link to="/cafes" className='exp_link'>
                                <button>
                                    explore
                                </button>
                            </Link>
                        
                        </div>

                            
                        
        
                        </div>
                    </div>
                

                </div>
                <div className='mobile-banner'>
                    <img src='../img/bg-five.png' alt='mobile banner'/>
                </div>
            <Slider/>
            
            </div>
            <Footer />

        </div>



        )
}

export default Home; 