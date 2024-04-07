

import React from 'react' 
import './Cafes.scss'
import SearchIcon from '@mui/icons-material/Search';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Cafes = ()=>{ 


    const cofId = useParams();
    const {data} = useFetch("https://fake-coffee-api.vercel.app/api?limit=8");

    
   
    

    return (
            <div id="wrapper">
                <Navbar/>
                <div className="cafes">

                    <div className="header-banner">
                        <h2>Cafe</h2>
                    </div>

                    <div className="sort-search">
                        <div className='sort-wrap'>
                            <h4>Sort By: </h4>
                            <div className='sort-input'>
                                    <div className='asc'>
                                        <input type="radio" id='asc'/>
                                        <label htmlFor="asc">
                                            Price (Lowest First)
                                        </label>
                                    </div>

                                    <div className='desc'>
                                        <input type ="radio" id='desc'/>
                                        <label htmlFor="desc">
                                            Price(Highest First)
                                        </label>
                                    </div>
                                </div>

                        </div>
                        
                        <div className="search">
                                <input type="text" placeholder='Search Cafes' />
                                <button><SearchIcon className='search-btn'/> </button>
                        </div>

                    </div>

                    <div className='cafe'>
                        {
                            data?.map(item =>(
                                <Card 
                                    name={item.name} 
                                    key={item.id}
                                    price={item.price}
                                    image={item.image_url}
                                    coffeeId={item.id}/>
                            )) 
                        }
                        
                    </div>
                    
                </div>
                <Footer/>
            </div>
          
       
    )
}

export default Cafes;