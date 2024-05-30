import React from "react";

import styles from "./SearchBar.module.scss";

const SearchBar = ({
    handleSearchChange,
    searchTerm,
    handleSearch,
    parentClass,
}) => {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch(e);
        }
    };
    return (
        <div className={`${parentClass}`}>
            <input
                type="search"
                value={searchTerm}
                placeholder="Enter a: City, State or Zip"
                onChange={handleSearchChange}
                onKeyUp={handleKeyPress}
                className={styles.searchBar}
            />
            <button onClick={handleSearch} className={styles.button}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
