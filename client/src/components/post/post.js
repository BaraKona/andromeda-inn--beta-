import React from 'react'
import dayjs from 'dayjs'
import './post.scss'

function Post ({post}) {
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    return (
        <section>
            <div className = "postImageContainer"><img alt="postImg" className="postImg" src={post.selectedFile}></img></div>
            <div className = "postCard">
                <div className = "postBody">
                    <p style={{textAlign: "right", textDecoration: "underline", textTransform: "capitalize"}}><span>Posted: </span>{dayjs(post.createdAt).fromNow()}</p>
                    <h1 className = "postTitle">{post.postTitle}</h1>
                    <p style={{textAlign: "justify", minHeight:"150px", maxHeight:"150px", overflowY: 'auto'}}> {post.postContent}</p>
                    {/* <p style={{textAlign: "justify", minHeight:"150px", maxHeight:"150px", overflowY: 'auto'}}> {post.postReContent}</p> */}
                    {/* <hr style={{width: "80%"}}/> */}
                    <p className="textEffect"><span>{post.postGenre.join(' - ')}</span></p>
                    {/* <p style={{textAlign: "right"}}>Interest: {post.postInterest}</p> */}
                </div>
            </div>
        </section>
    )
}

export default Post
