import React from 'react'
import {Link} from  'react-router-dom'
import dayjs from 'dayjs'
import './post.scss'

function ProfilePost ({post}) {
    return (
        <section className = "profilePostItem">
            <div className = "profilePostImageContainer"><img alt="postImg" className="profilePostImg" src={post.selectedFile}></img></div>
            <div className = "profilePostCard">
                <div className = "profilePostBody">
                    <p style={{textAlign: "right", textDecoration: "underline"}}><span>Posted: </span>{dayjs(post.createdAt).format('DD/MM/YYYY')}</p>
                    <h1 className = "profilePostTitle">{post.postTitle}</h1>
                    <p style={{textAlign: "justify", minHeight:"150px", maxHeight:"150px", overflowY: 'auto'}}> {post.postContent}</p>
                    <p style={{textAlign: "justify", minHeight:"150px", maxHeight:"150px", overflowY: 'auto'}}> {post.postReContent}</p>
                    <hr style={{width: "80%"}}/>
                    <p style={{fontWeight: "bolder",textAlign: "center"}}><span>{post.postGenre.join(' ')}</span></p>
                    <p style={{textAlign: "right"}}>Interest: {post.postInterest}</p>
                </div>
            </div>
        </section>
    )
}

export default ProfilePost
