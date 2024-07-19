

import React from 'react'
import './Checkout.scss'


import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Checkout({product, handleCheckOutClick}) {

        const totalPrice = () =>{ 

        let total = 0;
        product.forEach((item)=> (total += item.quantity * item.price))
        return total.toFixed(2);
    }
  return (
    
    <div className='checkout-wrap'>
          <div className='item-ordered'>
            <div className='close-order'>
          <small  onClick={handleCheckOutClick}>close</small>

            </div>
                <div className="icon">
                    < CheckCircleOutlineIcon/>
                    </div>
                   <div>
                   <h3 className='order-heading'>Order Confirmed</h3>
                   <small className='order-para'>Enjoy more deCaf at buyCOf</small>
                   </div>
                     

                        {product?.map(item=>(
                            <div>
                                <div className='item-list' key={item.id}>
                                    <div className='order-img'>
                                        <img src={item.img} alt="order item" />
                                    </div>
                                 
                                    <div className='item-details'>
                                         <small className='order-title'>{item.title}</small>
                                       <small className='order-price'> ${item.price} x {item.quantity}</small> 
                                    </div>
                                </div>
                            </div>
                        ))} 
                        <div className='total'>
                            <small>Total</small>
                            <small>{totalPrice()}</small>
                            
                        </div>      
            </div>   


    </div>

       )
}

export default Checkout

