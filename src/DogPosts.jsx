import React from 'react'
import DogCard from './DogCard'


function DogPosts({posts}){

    const postsArray = posts.map((post) => {
        return <DogCard
        key={post.id}
        {...post}
        />
    })



    return (

        <div>{postsArray}</div>
    )
}

export default DogPosts