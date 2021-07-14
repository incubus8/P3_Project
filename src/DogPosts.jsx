import React from 'react'
import DogCard from './DogCard'


function DogPosts({posts, handleDelete}){

 
    const postsArray = posts.map((post) => {
        return <DogCard
        key={post.id}
        {...post}
        handleDelete={handleDelete}
        />
    })



    return (

        <div>{postsArray}</div>
        
    )
}

export default DogPosts