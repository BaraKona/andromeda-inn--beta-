import React from 'react'
import icon from '../../images/icons/key.svg'
import {useSelector} from 'react-redux';
import {getPosts} from '../../actions/posts'
import '../css/landingPosts.css'

function Posts() {

    const posts = useSelector((state) => state.posts);

    console.log(posts)

    return (
        <section className="landingPosts">
            <div className = "landingKey">
                <p className ="floating">Journey in! </p>
                <p className = "floating arrow"><img className="iconImg" src={icon} alt="centerIcon"></img></p>
            </div>
            <div className ="landingPostsContainer">
                <h1 className="landingPostsTitle"> Explore the most recent enquiries</h1>
                <div className ="recentPosts">

                </div>
            </div>
        </section>
    )
}

export default Posts
