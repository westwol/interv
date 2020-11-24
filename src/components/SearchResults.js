import React from 'react';
import PropTypes from 'prop-types';
import './searchresults.css';

export const SearchResults = ({ results }) => {
    return (
        <div className="search-results__container">
            {
                results.map((item) => {
                    return (
                        <SearchResult 
                            key={item.id}
                            title={item.title}
                            labels={item.labels}
                        />
                    )
                })
            }
        </div>
    )
}

SearchResults.propTypes = {
    results: PropTypes.array.isRequired
};

const SearchResult = ({ title, labels }) => {
    return (
        <div className="search-results__result">
            <div className="search-results__result-header">
                <p className="search-results__result-title">{title}
                {
                    labels.map((item) => {
                        return (
                            <span key={item.id} className="search-results__results-label" style={{ backgroundColor: `#${item.color}` }}>
                                { item.name}
                            </span>
                        )
                    })
                }
                </p>
            </div>
        </div>
    )
}

SearchResult.propTypes = {
    title: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired
};