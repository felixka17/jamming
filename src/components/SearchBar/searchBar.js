import React from "react";

function SearchBar() { 
    return (
        <div className="searchBar-container">
            <input type="text" placeholder="Enter song name" /> 
            <button>Search</button>
        </div>
    );
}

export default SearchBar; 
