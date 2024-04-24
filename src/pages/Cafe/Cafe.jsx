import React, { useState } from 'react' 
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {useDispatch} from 'react-redux'
import { AddShoppingCartSharp } from '@mui/icons-material';
import { addToCart} from '../../redux/cartReducer'
import './Cafe.scss'

const Cafe = ()=>{ 

    const id = useParams().id;

    const [quantity , setQuantity] = useState(1)
    
    const dispatch = useDispatch();


    const { data, loading } = useFetch(`https://fake-coffee-api.vercel.app/api/${id}`)


    return(
        <div id="wrapper"> 
            <Navbar />

            {loading ? <div className='loading'> Loading.. </div> :  data?.map(item=>(

                    <div className='cafe-wrap' key={item.id}>
                        <div className='cafe-img__wrap'>
                            <div className='cafe-img_small'> 
                                <img src={item.image_url} alt= ""/>
                            </div>
            
                            <div className='cafe-img_large'>
                                <img src={item.image_url} alt=""/>
                            </div>
                        </div>
                  
        
                    <div className='cafe-details'>
                        <div>
                            <h4 className='cafe-name'>{item.name}</h4>
                            <small className='cafe-price'>${item.price}</small>
                        </div>
        
                        <p className='cafe-flavor'>{item.flavor_profile}</p>
        
        
                        <div className='quantity-btn'>
                        <span className='inc-btn' onClick={()=>setQuantity(prev=> prev === 1 ? 1 : prev -1 )}>-</span>
                            <span className='quantity-no'>{quantity}</span>
                            <span className='dec-btn' onClick={()=>setQuantity(prev=> prev + 1 )}>+</span>
                        </div>
                        <button onClick={ 
                            ()=> dispatch(addToCart({ 
                                id:item.id,
                                title:item.name,
                                img:item.image_url,
                                price:item.price,
                                quantity

                            }))
                        }><AddShoppingCartSharp className='add-btn'/>  Add to Cart</button>
                    
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