import React from 'react'
import ReactDOM from 'react-dom'
function CommentItem(props) {
    return <div key={props.id}><div>{props.id}</div><h1 style={{fontSize:"14px"}}>{props.user}</h1></div>
}
export default CommentItem;