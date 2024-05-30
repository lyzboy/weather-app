import React, { useState, useContext } from "react";

import SearchBar from "../../components/searchBar/SearchBar";

import { getLatLong } from "../../services/api";
import { LocationContext } from "../../contexts/LocationsContext";

const SearchBarContainer = ({ parentClass }) => {
    const {setLocation} = useContext(LocationContext);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = async () => {
        try{
            console.log(`Searching for ${searchTerm}`);
            setSearchTerm("");
            let location = await getLatLong(searchTerm);
            console.log(location)
            if(Array.isArray(location)){
                let {lat, lon, name, state} = location[0];
                setLocation({lat, lon, name, state});
            } else {
                let {lat, lon, name, state} = location;
                setLocation({lat, lon, name, state});
            }
        } catch(error){
            console.log(error);
        }
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
