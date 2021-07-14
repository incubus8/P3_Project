import userEvent from '@testing-library/user-event'
import React, {useEffect, useState} from 'react'



export default function Comment({content, user_id}){
    const [user, setUser] = useState("")
    
    useEffect(() => {
        fetch(`http://localhost:9393/user/${user_id}`)
        .then(res => res.json())
        .then(userObj => setUser(userObj))
    }, [])


     return(
      <li>{user.name}: {content}</li>
    )
}