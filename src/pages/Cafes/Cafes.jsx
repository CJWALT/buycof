

import React from 'react' 
import './Cafes.scss'
import SearchIcon from '@mui/icons-material/Search';
import Card from '../../components/Card/Card';


const Cafes = ()=>{ 

    return (
            <div id="wrapper">
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

                    <div className='cafe-wrap'>
                        <Card/>
                    </div>
                    
                </div>
            </div>
          
       
    )
}

export default Cafes;