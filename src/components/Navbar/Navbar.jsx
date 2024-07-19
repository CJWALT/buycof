import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.scss'
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';


const Navbar = () =>{ 

    const [cartModal, setCartModal] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    
    const products = useSelector(state=>state.cart.products)



    return (
        <>
        <nav>

        <div className='nav_wrap'>
            <div className="logo">
                <Link to='/'>
                    <img src='../../img/LOGO.png' alt='buycof logo'/>
                    
                </Link>
            </div>
                    <div  className={openMenu ? "links open" : 'links '} >
                        <Link to='/'className='link' onClick={()=>setOpenMenu(!openMenu)}>Home</Link>
                        <Link to='/cafes'className='link' onClick={()=>setOpenMenu(!openMenu)}>Cafe</Link>
                    </div>
            <div className="cart_btn" >
                <div className="btn" onClick={()=>setCartModal(!cartModal)}>
                    <span>{products.length}</span>
                    <ShoppingCartOutlinedIcon className="cart_icon"/>
                </div>
                <MenuRoundedIcon className='menu-btn' onClick={()=>setOpenMenu(!openMenu)}/>                        
            </div>
        </div>



        </nav>
        {cartModal && <Cart/>} 
        </>
       
    )
}

export default Navbar;