import React from 'react' 
import './Cart.scss'



 const Cart = ()=>{

    return (
        <>
            <div className='cart-wrap'> 
                <div className='img-price'>
                    <img src="../img/coffeeseven.png" alt="item " />
                    <div className="cofname-price">
                        <h5 className='cofname'>Signature Blend</h5>
                        <small className="price">1 x $30</small>
                    </div>
                </div>

                <div className='total-checkout__btn'>
                    <div className='total-wrap' >
                        <h4>Total:</h4>
                        <h4>$30</h4>
                    </div>
                    
                    <button>
                    Proceed to Checkout 
                </button>

                </div>
               


            </div>
        
        </>
    )
}


export default Cart;