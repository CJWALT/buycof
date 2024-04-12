import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.scss'
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';

const Navbar = () =>{ 

    const [cartModal, setCartModal] = useState(false)
    
    const products = useSelector(state=>state.cart.products)



    return (
        <nav>

                <div className='nav_wrap'>
                    <div className="logo">
                        <Link to='/'>
                            <img src='../../img/LOGO.png' alt='buycof logo'/>
                        </Link>
                    </div>
                    <div className="links">
                        <Link to='/'className='link'>Home</Link>
                        <Link to='/cafes'className='link'>Cafe</Link>
                    </div>
                    <div className="cart_btn" onClick={()=>setCartModal(!cartModal)}>
                        <div className="btn">
                            <span>{products.length}</span>
                            <ShoppingCartOutlinedIcon className="cart_icon"/>
                        </div>
                        
                    </div>
                </div>

                {cartModal && <Cart/>}

        </nav>
    )
}

export default Navbar;