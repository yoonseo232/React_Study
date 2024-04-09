import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function PostApp(){
    const [bulletin, setBulletin] = useState([
        {title: "제목1", content: "내용1", comments: [{comment : "댓글1", delete : false},{comment : "댓글2", delete : false},{comment : "댓글3", delete : false}]},
        {title: "제목2", content: "내용2", comments: [{comment : "댓글1", delete : false},{comment : "댓글2", delete : false}]}
    ])

    return (<div>
        <PostList bulletin={bulletin}/>
    </div>)
}

function PostItem({bulletin, index}){
    return (<div>
        <div>{bulletin.title}</div>
    </div>)
}

function PostList({bulletin}){
    return (<div>
            {
                bulletin.map((bulletin, index) => {
                    return <PostItem bulletin={bulletin} index={index}/>
                })
            }
    </div>)
}

function CommentsApp(props){
    const [comments, setComments] = useState([
        {comment : "댓글1", delete : false},
        {comment : "댓글2", delete : false},
        {comment : "댓글3", delete : false}
    ])
    
    const addComment = newComment => setComments(comments.concat(newComment))
    const removeComment = index => setComments(comments.filter((_, cIdx) => index !== cIdx))
    

    return (<div>
        <CommentAdder/>
        <CommnetList comments={comments} addComment={addComment} removeComment={removeComment}/>
    </div>)
}

function CommentItem({comment, index, removeComment}){
    return (<div>
        <span>{comment.comment}</span>
        <button onClick={() => removeComment(index)}>삭제</button>
    </div>)
}

function CommnetList({comments, removeComment}){
    return (<div>
            {
                comments.map((comment, index) => {
                    return <CommentItem comment={comment} index={index} removeComment={removeComment}/>
                })
            }
    </div>)
}

function CommentAdder({addComment}){
    const [text, setText] = useState("")

    return(<div>
        <input type='text' value={text} onChange={e => setText(e.target.value)} placeholder="댓글을 입력하세요."></input>
        <button onClick={() => {
            addComment({text})
            setText("")
        }}>게시</button>
    </div>)
}

root.render(
    <CommentsApp/>
)