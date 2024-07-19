import React, { useState } from 'react' 
import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { removeItem, resetItem } from '../../redux/cartReducer';
import Checkout from '../Checkout/Checkout';




 const Cart = ()=>{

    const products = useSelector(state => state.cart.products)

    const [checkout, setCheckout] = useState(false)

    
    const dispatch = useDispatch()

    const totalPrice = () =>{ 

        let total = 0;
        products.forEach((item)=> (total += item.quantity * item.price))
        return total.toFixed(2);
    }

    const handleCheckOutClick = (e)=>{ 
            e.preventDefault();
        setCheckout(!checkout)
    }

    



    return (
        <>
            <div className='cart-wrap'> 

            {products?.map(item=> (
                <div className='img-price' key={item.id}>
                <img src={item.img} alt="item " />
                <div className="cofname-price">
                    <h5 className='cofname'>{item.title}</h5>
                    <small className="price">{item.quantity} x { item.price} </small>
                </div>
                <DeleteOutlineIcon className='delete-btn' onClick={ ()=> dispatch(removeItem(item.id))}/>
            </div>
            ))}
          

                <div className='total-checkout__btn'>
                    <div className='total-wrap' >
                        <h4>SUBTOTAL:</h4>
                        <h4>{totalPrice()}</h4>
                    </div>
                    
                    <button onClick={handleCheckOutClick}>
                    Proceed to Checkout 
                    </button>

                </div>

                <span className='reset-btn' onClick={ ()=> dispatch(resetItem()) }>Reset</span>
               


            </div>

            {
                checkout && <Checkout
                        product= {products}
                        handleCheckOutClick={handleCheckOutClick} />  
            }
        
        </>
    )
}


export default Cart;