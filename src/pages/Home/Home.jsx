import React from 'react' 
import './Home.scss'
import { Link } from 'react-router-dom';

const Home = ()=>{

    return(
        <div className="home">
            <div className='home_wrap'>
                <div>
                    <span className='bar_before'></span>
                    <div className="home_banner">
                        <h2>Cold bREW</h2>
                        <p>
                            We source, roast and blend our coffee with passion. 
                        </p>
                        <p>we select our teas with love... buycof!</p>
                    </div>
                    <button>
                        <Link to="/cafe">explore</Link>
                    </button>
                </div>

            </div>

        </div>
        )
}

export default Home; 