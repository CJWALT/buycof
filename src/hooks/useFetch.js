import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url, sortParam, limitParam) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let apiUrl = url;
        
        // Append sort parameter if provided
        if (sortParam) {
          apiUrl += `?sort=${sortParam}`;
        }
        
        // Append limit parameter if provided
        if (limitParam) {
          apiUrl += `&limit=${limitParam}`;
        }

        const res = await axios.get(apiUrl);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, sortParam, limitParam]);

  return { data, loading, error };
};

export default useFetch;
