import React from 'react' 
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ name, price, image, coffeeId }) =>{ 
console.log(coffeeId)
    return (
        <>
        
      
            <div className='card-wrap'>
                    <div className='card-img'>
                        <img src={image} alt="" />
                    </div>
                    <div className='card-details'>
                        <h5 className="cafe-name">
                           {name}
                        </h5>
                        <div className="cafe-price">
                            {price}
                        </div>
                    </div>

                    <Link to={`/cafe/${coffeeId}`}>
                    <button>Buy Now</button>
                        </Link> 
                </div>
            
        </>

    )
}

export default Card