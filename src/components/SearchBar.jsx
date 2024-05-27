import React from "react";

const SearchBar = ({handleSearchChange, searchTerm, handleSearch}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSearch(e);
        }
    }
    return (
        <div>
            <input
                type="search"
                value={searchTerm}
                placeholder ="Enter a City"
                onChange={handleSearchChange}
                onKeyUp={handleKeyPress}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;