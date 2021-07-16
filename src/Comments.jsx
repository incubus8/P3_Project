import React, {useState} from 'react'
import Comment from './Comment'



export default function Comments({comments, id, displayComment}){
    const [addComment, setAddComment] = useState("")
    

    const commentsArr = comments.map(comment => {
        return <Comment key={comment.id} {...comment} />
    })
  
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
            pet_post_id: id,
            content: addComment,
            user_id: 1
        }

    fetch(`http://localhost:9292/pet_posts/comments`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(commentData),
            })
            .then((res) => res.json())
            .then(singleComment => displayComment(singleComment))
            
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
                <br/>
                <ul>{commentsArr}</ul>
        </div>
        :
        null
        }
        </div>

    )
}