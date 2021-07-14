import React, {useEffect, useState} from "react";
import DogPosts from "./DogPosts";
import SearchBar from "./SearchBar";
import Header from "./Header";
import PostForm from "./PostForm";

function Homepage(){
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState([])
    
    useEffect((e) => {
        fetch('http://localhost:9393/pet_posts')
        .then(resp => resp.json())
        .then(data => setPosts(data))
    }, [])

    const addPost = (newPost) => {
        let postArray = [newPost, ...posts]
        setNewPost(postArray)
      }
 ;
    return(
        <div>
            <Header/>
            <SearchBar/>
            <PostForm newPost={newPost} setNewPost={setNewPost} addPost={addPost}/>
             <DogPosts posts={posts}/>
        </div>


    )

}

export default Homepage