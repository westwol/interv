import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import './searchbar.css';

export const Searchbar = ({ setSearchResults }) => {

    const [ searchValue, setSearchValue ] = useState('');
    const [ value, setValue ] = useState('');

    const onChangeSearch = e => {
        setValue(e.target.value);
        const search = _.debounce(fetchSearchApi, 700);
        setSearchValue(prevSearchValue => {
            if (prevSearchValue.cancel) {
                prevSearchValue.cancel();
            }
            return search;
        });
        search(e.target.value);
    }

    const fetchSearchApi = async(value) => {
        /*
            Perdí los links de la llamada, pero el search api solo me permitia buscar en issues de todos los repositorios de GitHub,
            no se si este era el approach esperado, favor de hacermelo saber en el feedback, Gracias :)
        */
        try {
            if (value === '') {
                setSearchResults([]);
            } else {
                const results = await axios.get(`https://api.github.com/search/issues?q=${value}`)
                setSearchResults(results.data?.items);
            }
        } catch (error) {
            console.log('error happened');
        }
    }

    return (
        <>
            <input 
                className="searchbar__input" 
                placeholder="Search"
                value={value}
                onChange={onChangeSearch}
            />  
        </>
    )
}

Searchbar.propTypes = {
    setSearchResults: PropTypes.func.isRequired
};