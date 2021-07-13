import React, {useState} from 'react'



export default function Comments({comments}){
    const commentsArr = comments.map(comment => {
        let userComments = comment.content
        return <li>{userComments}</li>
    })

    const[isClicked, setClick] = useState(false)
    
    const handleClick = (e) => {
        setClick(!isClicked)
    }


     return(
         <div>
             <h5 style={{float:'left'}}>💬 {commentsArr.length}</h5><button type="button" class="btn btn-light" onClick={handleClick} id="arrow-button"style={{float:'left'}}>⤵</button>
        { isClicked ?
        <div>
            <br/>
            <br/>
             <ul>{commentsArr}</ul>
        </div>
        :
        null
        }
        </div>

    )
}