import React, {useEffect, useState} from "react";
import DogPosts from "./DogPosts";
import SearchBar from "./SearchBar";
import Header from "./Header";

function Homepage(){
    const [posts, setPosts] = useState([])

    useEffect((e) => {
        fetch('http://localhost:9393/')
        .then(resp => resp.json())
        .then(data => setPosts(data))
    }, [])


    return(
        <div>
            <Header/>
            <SearchBar/>
            <h1>Hello</h1>
            <DogPosts posts={posts}/>
        </div>


    )

}

export default Homepage