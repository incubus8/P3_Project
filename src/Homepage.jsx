import React, {useEffect, useState} from "react";
import DogPosts from "./DogPosts";
import SearchBar from "./SearchBar";
import Header from "./Header";
import PostForm from "./PostForm";

function Homepage(){
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const handleDelete = (id) => {
        fetch(`http://localhost:9393/pet_posts/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
            const updatedPosts = posts.filter((post) => post.id !== id);
            setPosts(updatedPosts);
          });
      }


    useEffect((e) => {
        fetch('http://localhost:9393/pet_posts')
        .then(resp => resp.json())
        .then(data => setPosts(data))
    }, [])

    const addPost = (newPost) => {
        let postArray = [...posts, newPost]
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
            <PostForm newPost={newPost} setNewPost={setNewPost} addPost={addPost}/>
            <SearchBar handleSearch={handleSearch}/>
            <Header/>
            <DogPosts posts={filterDogs} handleDelete={handleDelete}/>
        </div>


    )

}

export default Homepage