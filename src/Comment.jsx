import userEvent from '@testing-library/user-event'
import React, {useEffect, useState} from 'react'



export default function Comment({content, user_name}){
    // const [user, setUser] = useState("")
    
    // useEffect(() => {
    //     fetch(`http://localhost:9393/user/${user_id}`)
    //     .then(res => res.json())
    //     .then(userObj => setUser(userObj))
    // }, [])


     return(
         <div>
             <br/>
         <div className="comment-section">
        <h6>{user_name} </h6>
        <li> {content}</li>
        </div>
      </div>
    )
}