import React from 'react'
import {Link} from  'react-router-dom'
import './post.scss'

function MiniPost ({post}) {
    console.log(post)
    return (
        <section className = "smallPostItem">
            <div className = "smallPostImageContainer">
                <img alt="postImg" className="smallPostImg" src={post.selectedFile}></img>
                <div>
                    <p>{post.postCollab.join(' - ')}</p>
                    <h3>{post.postTitle}</h3>
                </div>
            </div >
            <div className="smallPostText"> <p>{post.postContent}</p></div>
            <p className="textEffect center">{post.postGenre.join(' - ')}</p>
            <button className="button buttonPost">Read More</button>
        </section>
    )
}

export default MiniPost
