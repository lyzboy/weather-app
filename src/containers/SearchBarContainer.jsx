import React, {useState} from "react";

import SearchBar from "../components/SearchBar";

const SearchBarContainer = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = () => {
        console.log(`Searching for ${searchTerm}`);
        setSearchTerm("");
    }

    return (
        <div>
            <SearchBar 
                searchTerm={searchTerm} 
                handleSearchChange={handleSearchTermChange}
                handleSearch={handleSearch}
            />
        </div>
    )
}

export default SearchBarContainer;