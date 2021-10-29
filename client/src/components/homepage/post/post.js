import React from 'react'
import {Link} from  'react-router-dom'
import moment from 'moment'
import './post.css'

function Post ({post}) {
    return (
        <section className = "postItem">
            <div className = "postImageContainer"><img alt="postImg" className="postImg" src={post.selectedFile}></img></div>
            <div className = "postCard">
                <div className = "postBody">
                    <p style={{textAlign: "right", textDecoration: "underline"}}><span>Posted: </span>{moment(post.createdAt).calendar()}</p>
                    <h1 className = "postTitle">{post.postTitle}</h1>
                    <p style={{textAlign: "justify"}}> {post.postContent}</p>
                    <p style={{textAlign: "justify"}}> {post.postReContent}</p>
                    <hr style={{width: "80%"}}/>
                    <p style={{fontWeight: "bolder",textAlign: "center"}}><span>{post.postGenre}</span></p>

                </div>
            </div>
        </section>
    )
}

export default Post
