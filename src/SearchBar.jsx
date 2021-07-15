import React from 'react'


function SearchBar({handleSearch}){



    return (
        <div className="searchbar">
          <label htmlFor="search"></label>
          <input
            onChange={handleSearch}
            type="text"
            id="search"
            placeholder="  🔎   Search dogs"
            style={{boxShadow: '3px 1px 1px 1px #00000034', width: "120%", borderRadius: "25px", borderWidth:"0.5px", borderColor: "lightgray", height: "40px"}}
          />
        </div> 
      );

}

export default SearchBar