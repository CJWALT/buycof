import React from 'react' 
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { AddShoppingCartSharp } from '@mui/icons-material';
import './Cafe.scss'

const Cafe = ()=>{ 

    const id = useParams().id;

    const { data } = useFetch(`https://fake-coffee-api.vercel.app/api/${id}`)

    // console.log(data)
    return(
        <div id="wrapper"> 
            <Navbar />

            {
                data?.map(item=>(

                    <div className='cafe-wrap' key={item.id}>
                    <div className='cafe-img_small'> 
                        <img src={item.image_url} alt= ""/>
                    </div>
        
                    <div className='cafe-img_large'>
                        <img src={item.image_url} alt=""/>
                    </div>
        
                    <div className='cafe-details'>
                        <div>
                            <h4 className='cafe-name'>{item.name}</h4>
                            <small className='cafe-price'>{item.price}</small>
                        </div>
        
                        <p className='cafe-flavor'>{item.flavor_profile}</p>
        
        
                        <div className='quantity-btn'>
                            <span className='inc-btn'>-</span>
                            <span className='quantity-no'>1</span>
                            <span className='dec-btn'>+</span>
                        </div>
                        <button><AddShoppingCartSharp className='add-btn'/>  Add to Cart</button>
                    
                        <div className='other-links'>
                            <hr/>
                            <Link to='/' className='link'>FAQ</Link>
                            <Link to='/' className='link'>Description</Link>
                            <Link to='/' className='link'>Policy</Link>
                        </div>
                    </div>
                        
                   
                  </div>
        
                ))
            }
            
         
            <Footer/>
        </div>
    )

}

export default Cafe;