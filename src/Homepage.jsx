import React, {useEffect, useState} from "react";
import DogPosts from "./DogPosts";
import SearchBar from "./SearchBar";
import Header from "./Header";
import PostForm from "./PostForm";

function Homepage(){
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState([])
    const [searchValue, setSearchValue] = useState("")


    useEffect((e) => {
        fetch('http://localhost:9393/pet_posts')
        .then(resp => resp.json())
        .then(data => setPosts(data))
    }, [])

    const addPost = (newPost) => {
        let postArray = [newPost, ...posts]
        setNewPost(postArray)
      }

      const handleSearch = (e) => {
        setSearchValue(e.target.value)
      }

      const filterDogs= posts.filter(post => {
          return (post.breed.toLowerCase().includes(searchValue.toLowerCase()))
          ||
          (post.name.toLowerCase().includes(searchValue.toLowerCase()))
      })

 
    return(
        <div>
            <Header/>
            <SearchBar handleSearch={handleSearch}/>
            <PostForm newPost={newPost} setNewPost={setNewPost} addPost={addPost}/>
             <DogPosts posts={filterDogs}/>
        </div>


    )

}

export default Homepage