import React from 'react' 
import './Footer.scss'

const Footer = ()=>{ 

  const date = new Date();

  const {year} = date;
    return(
            <>
              <footer>
        <a href="https://www.github.com/cjwalt">cjwalt codes</a>
       <small> &copy; {year} buycof!
        </small>
      </footer>
            </>
    
    )
}


export default Footer; 