import React from 'react'


function SearchBar({handleSearch}){



    return (
        <div className="searchbar">
          <label htmlFor="search"></label>
          <input
            onChange={handleSearch}
            type="text"
            id="search"
            placeholder=" 🔎 Search by breed or dog name"
            style={{width: "20%", boxShadow: '3px 1px 1px 1px #00000034', marginRight:"100px", marginLeft:"520px", borderRadius: "25px", borderWidth:"0.5px", borderColor: "lightgray"}}
          />
        </div> 
      );

}

export default SearchBar