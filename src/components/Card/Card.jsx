import React from 'react' 
import './Card.scss'

const Card = () =>{ 

    return (
        <>
        
        <div className="card">
            <div className='card-wrap'>
                    <div className='card-img'>
                        <img src="../../img/coffeeseven.png" alt="" />
                    </div>
                    <div className='card-details'>
                        <h5 className="cof-name">
                            Rainforest Rhapsody 
                        </h5>
                        <div className="cafe-price">
                            $13
                        </div>
                    </div>

                    <button>Buy Now</button>
                </div>
        </div>
            
        </>

    )
}

export default Card