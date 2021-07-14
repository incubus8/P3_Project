import React from 'react'


function SearchBar(){

    return (
        <div className="searchbar">
          <label htmlFor="search"></label>
          <input
            type="text"
            id="search"
            placeholder=" 🔎 Search by breed"
            style={{width: "18%", boxShadow: '3px 1px 1px 1px #00000034', marginRight:"100px", marginLeft:"520px", borderRadius: "25px", borderWidth:"0.5px", borderColor: "lightgray"}}
          />
        </div> 
      );

}

export default SearchBar