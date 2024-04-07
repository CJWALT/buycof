import {useEffect, useState} from 'react';
import axios from 'axios';


const useFetch = (url)=>{ 


    const [loading, setLoading] = useState(false); 
    const [data, setData] = useState([]); 
    const [err, seterr] = useState(false)



    useEffect(()=>{ 

        const fetchData = async () =>{ 
            try{
                setLoading(true); 
                const res = await axios.get(url);
                setData(res.data)
                // console.log(res);
            }
            catch(err){ 
                console.log(err)
            }
        }
        fetchData();
    }, [url]);

    return {data, loading, err}


} 


export default useFetch; 