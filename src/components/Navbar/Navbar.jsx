import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.scss'

const Navbar = () =>{ 



    return (
        <nav>

                <div className='nav_wrap'>
                    <Link to='/' className="logo">
                        <img src="./img/LOGO.png" alt=" logo buycof" />
                    </Link>
                    <div className="links">
                        <Link to='/'className='link'>Home</Link>
                        <Link to='/cafes'className='link'>Cafe</Link>
                    </div>
                    <div className="cart_btn">
                        <div className="btn">
                            <span>0</span>
                            <ShoppingCartOutlinedIcon className="cart_icon"/>
                        </div>
                        
                    </div>
                </div>

        </nav>
    )
}

export default Navbar;