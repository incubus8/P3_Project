import React, {useState} from 'react'
import Comment from './Comment'



export default function Comments({comments, id}){
    const [addComment, setAddComment] = useState("")
    const [newComment, setNewComment] = useState("")

    const commentsArr = comments.map(comment => {
        return <Comment {...comment} />
    })
  
    const displayComment = (newComment) => {
        let commentArray = [newComment, ...commentsArr]
        return setNewComment(commentArray)
    }

    const[isClicked, setClick] = useState(false)
    
    const handleClick = (e) => {
        setClick(!isClicked)
    }

    const handleComment = (e) =>{
        setAddComment(e.target.value)
    }

    const handleCommentSubmit = (e) =>{
        e.preventDefault()
        let commentData = {
            content: addComment,
            user_id: 15
        }

    fetch(`http://localhost:9393/pet_posts/${id}/comments`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(commentData),
            })
            .then((res) => res.json())
            .then(postData => displayComment(postData))
            
            setAddComment("")

        }

     return(
         <div>
             <h5 style={{float:'left'}}>💬 {commentsArr.length} </h5><button type="button" class="btn btn-light" onClick={handleClick} id="arrow-button"style={{float:'left'}}> ⤵</button>
        { isClicked ?
        <div>
            <br/>
            <br/>
            <h5>Comments</h5>
             <form onSubmit={handleCommentSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"> </label>
                    <input style={{float:'left', width: '80%'}} onChange={handleComment} type="text" class="form-control" id="pets-name" value={addComment} placeholder="Add a comment"
                    />
                    <button 
                    style={{float:'left'}}
                    type="submit" class="btn btn-primary">Submit</button>
                    
                </div>
            </form>
             <ul>{newComment}</ul>
        </div>
        :
        null
        }
        </div>

    )
}