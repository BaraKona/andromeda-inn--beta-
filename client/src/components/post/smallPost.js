import React from 'react'
import {Link} from  'react-router-dom'
import './post.scss'

function MiniPost ({post}) {
    return (
        <section className = "smallPostItem">
            <div className = "postImageContainer"><img alt="postImg" className="smallPostImg" src={post.selectedFile}></img></div>
            <div className = "smallPostCard">
                <div className = "smallPostBody">
                    <h1 className = "postTitle">{post.postTitle}</h1>
                    <p style={{fontWeight: "bolder",textAlign: "center", height:"20px",}}><span>{post.postGenre}</span></p>
                    <p style={{textAlign: "right"}}> Interest: {post.postInterest}</p>
                </div>
            </div>
        </section>
    )
}

export default MiniPost
