import React, {useEffect, useState} from "react";
import DogPosts from "./DogPosts";
import SearchBar from "./SearchBar";
import Header from "./Header";
import PostForm from "./PostForm";

function Homepage(){
    const [posts, setPosts] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const handleDelete = (id) => {
        fetch(`http://localhost:9292/pet_posts/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
            const updatedPosts = posts.filter((post) => {
              console.log("posts", post.id, id);
              return post.id !== (id)})
            setPosts(updatedPosts);
          });
      }


    useEffect((e) => {
        fetch('http://localhost:9292/pet_posts')
        .then(resp => resp.json())
        .then(data => setPosts(data))
    }, [])

    const addPost = (newPost) => {
      console.log("postData");
        let postArray = [...posts, newPost]
        setPosts(postArray)
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
            <PostForm addPost={addPost}/>
            <SearchBar handleSearch={handleSearch}/>
            <Header/>
            <DogPosts posts={filterDogs} handleDelete={handleDelete}/>
        </div>


    )

}

export default Homepage