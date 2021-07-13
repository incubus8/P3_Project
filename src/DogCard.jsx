import React, {useState, useEffect} from 'react'
import Comments from './Comments'


export default function DogCard({id, likes, img_url, description, name, breed}){

    const [isLiked, setIsLiked] = useState(likes)
    const [comments, setComments] = useState([])


    useEffect((e) => {
        fetch(`http://localhost:9393/pet_posts/${id}/comments`)
        .then(resp => resp.json())
        .then(data => setComments(data))
    }, [])


    // const comLis = comments.map(comm => )


    function  handleLikes(e){
        const newLike = isLiked + 1
        fetch (`http://localhost:9393/pet_posts/${id}`,{
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "likes": newLike
            })
          })
          .then(res => res.json())
          .then(res => {
              setIsLiked(res.likes)
          })
        }

       

return (

  <div className="card" id="dog-card" style={{width: "40rem", boxShadow: '3px 5px 1px 1px #00000034'}}>
  <img src={img_url} class="card-img-top" alt="some alt"/>
  <div class="card-body">
    <h4 class="card-title">{name} 🐾</h4>
    <h6 class="card-title">Breed: {breed}</h6>
    <p class="card-text">{description}</p>
    <p>❤️ {isLiked}</p>
   <button onClick={handleLikes} class="btn btn-primary">Like</button>
   <hr/>
    <div><Comments comments={comments}/></div>
  </div>
  </div>


    )
}

 
