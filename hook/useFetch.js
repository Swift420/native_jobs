import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from '@env'
// const rapidAPIKey = RAPID_API_KEY;

const useFetch = (endpoint,query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query},
        headers: {
          'X-RapidAPI-Key': "8c21ee6849mshcce75e434f2fb8fp1f4c87jsn097f6cfc849d",
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options)

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an error");
            console.log(error)
        } finally {

            setIsLoading(false);
        }
      }

      useEffect(()=> {
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return {data, isLoading, error, refetch}

}


export default useFetch