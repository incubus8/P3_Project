import React from 'react'


function DogCard({id, likes, img_url, description}){


return (
        <div>
        <img src={img_url}/>
        <p>Description: {description}</p>
        <p>likes: {likes}</p>
        </div>

    )
}

export default DogCard