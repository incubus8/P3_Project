import React, {useState} from 'react'


export default function DogCard({id, likes, img_url, description}){

    const [isLiked, setIsLiked] = useState(likes)

    function  handleLikes(e){
        const newlike = isLiked +1 
        fetch (`http://localhost:9393/${id}`,{
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "likes": newlike
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
    <h5 class="card-title">Dog's name</h5>
    <p class="card-text">{description}</p>
    <p>Likes: {isLiked}</p>
   <button onClick={handleLikes} class="btn btn-primary">Like</button>
  </div>
  </div>


    )
}

 
