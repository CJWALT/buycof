import React, { useState } from 'react'
import './Slider.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Slider = () =>{ 


    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = ()=>{ 
        setCurrentSlide( currentSlide === 0 ? 2 : prev => prev -1)
    }

    const nextSlide = ()=>{ 
        setCurrentSlide( currentSlide === 2 ? 0 : prev => prev + 1)
    }
    return (
        <div className="slider">
            <div className="container" style={{transform : `translateX(-${currentSlide * 100 }vw )`}}>
                <span className='slide-one'></span>
                <span className='slide-two'></span>
                <span className='slide-three'></span>    
            </div>

            <div className="slide-btn">
                <ArrowBackIcon className="btn" onClick={prevSlide}/>
                <ArrowForwardIcon className="btn" onClick={nextSlide}/>
                    
            </div>
            
        </div>
    )
}

export default Slider;