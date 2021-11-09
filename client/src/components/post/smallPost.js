import React from 'react'
import {Link} from  'react-router-dom'
import moment from 'moment'
import './post.css'

function MiniPost ({post}) {
    return (
        <section className = "smallPostItem">
            <div className = "postImageContainer"><img alt="postImg" className="smallPostImg" src={post.selectedFile}></img></div>
            <div className = "postCard">
                <div className = "postBody">
                    <p style={{textAlign: "right", textDecoration: "underline"}}><span>Posted: </span>{moment(post.createdAt).calendar()}</p>
                    <h1 className = "postTitle">{post.postTitle}</h1>
                    <p style={{textAlign: "justify", height:"80px", overflowY: 'auto'}}><span>Looking for:</span> {post.postReContent}</p>
                    <hr style={{width: "80%"}}/>
                    <p style={{fontWeight: "bolder",textAlign: "center", height:"20px",}}><span>{post.postGenre}</span></p>
                    <p style={{textAlign: "right"}}>Interest: {post.postInterest}</p>
                </div>
            </div>
        </section>
    )
}

export default MiniPost
