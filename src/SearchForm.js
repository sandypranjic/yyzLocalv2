import React from 'react';

const SearchForm = () => {
    return ( 
        <React.Fragment>
            <form className="searchForANeighbourhood" id="searchForANeighbourhood">
                <input type="text" name="searchTerm" id="searchTerm" placeholder="Enter a search term" />
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </React.Fragment>
    );
}

export default SearchForm;