import React, { useState } from "react";

import SearchBar from "../../components/searchBar/SearchBar";

const SearchBarContainer = ({ parentClass }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        console.log(`Searching for ${searchTerm}`);
        setSearchTerm("");
    };

    return (
        <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchTermChange}
            handleSearch={handleSearch}
            parentClass={parentClass}
        />
    );
};

export default SearchBarContainer;
