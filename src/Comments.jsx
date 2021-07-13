import React, {useState, useEffect} from 'react'



export default function Comments({comments}){
    const commentsArr = comments.map(comment => {
        return comment.content
    })
    console.log("hi", commentsArr);





    return(
        <div>
            <h5>Comments:</h5>
            <p>{commentsArr}</p>
        </div>

    )
}