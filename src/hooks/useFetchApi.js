import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchApi = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ results, setResults ] = useState([]);

    useEffect(() => {
        const fetchApi = async() => {
            try {
                const results = await axios.get('https://api.github.com/repos/facebook/react/issues');
                setResults(results.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
            }
        }
        fetchApi();
    }, []);

    return {
        isLoading,
        results,
        error
    }
}