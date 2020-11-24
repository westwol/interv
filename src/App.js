import React, { useState } from 'react'
import { Searchbar } from './components/Searchbar'
import { SearchResults } from './components/SearchResults'
import { useFetchApi } from './hooks/useFetchApi'

export const App = () => {
    const [ searchResults, setSearchResults ] = useState([]);
    const { results, error, isLoading } = useFetchApi();

    const renderSearchResults = () => {
        return (
            (searchResults.length > 0)
                ? <SearchResults results={searchResults} />
                : (error)
                    ? <p>Error while fetching</p>
                    : <SearchResults results={results} />
        )
    }

    return (
        <div className="main">
            <div className="wrapper">
                <h2 className="wrapper__title">GitHub Issue Tracker</h2>
                <Searchbar setSearchResults={setSearchResults} />
                {
                    isLoading 
                        ? <p>Please wait, we are loading issues from facebook/react...</p>
                        : renderSearchResults()
                }
            </div>
        </div>
    )
}
