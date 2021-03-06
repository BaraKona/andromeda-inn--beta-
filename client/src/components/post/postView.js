import React from 'react'
import dayjs from 'dayjs'
import './post.scss'

function Post ({post}) {

    return (
        <section>
            <div className = "postImageContainer"><img alt="postImg" className="postImgWide" src={post.selectedFile}></img></div>
            <div className = "postCardWide">
                <div className = "postBody">
                    <p style={{textAlign: "right", textDecoration: "underline"}}><span>Posted: </span>{dayjs(post.createdAt).format('DD/MM/YYYY')}</p>
                    <h1 className = "postTitle">{post.postTitle}</h1>
                    <p style={{textAlign: "justify", minHeight:"150px", maxHeight:"250px", overflowY: 'auto'}}> {post.postContent}</p>
                    <p style={{textAlign: "justify", minHeight:"150px", maxHeight:"250px", overflowY: 'auto'}}> {post.postReContent}</p>
                    {/* <hr style={{width: "80%"}}/> */}
                    <p className="textEffect"><span>{post.postGenre ? post.postGenre.join(' - ') : ('')}</span></p>
                    {/* <p style={{textAlign: "right"}}>Interest: {post.postInterest}</p> */}
                </div>
            </div>
        </section>
    )
}

export default Post
