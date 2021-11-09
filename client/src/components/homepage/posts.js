import React from 'react'
import icon from '../../images/icons/key.svg'
import {useSelector} from 'react-redux';
import {getPosts, getPostsLimit} from '../../actions/posts'
import Post from '../post/post'
import './css/posts.css'

const Posts = ()=> {

    const posts = useSelector((state) => state.posts);
    // console.log(posts)
    // fetch only last four from database -because that mug said
    return (

        <section className="landingPosts">
            <div className = "landingKey">
                <p className ="floating">Journey in! <br/><br/></p>
                <p className = "floating arrow"><img className="iconImg" src={icon} alt="centerIcon"></img></p>
            </div>
            <div className ="landingPostsContainer">
                <h1> Explore the most recent enquiries</h1>
                <div className ="recentPosts">
                    {!posts.length ? <div> Loading... </div> : (
                        <div className="postMap"> {posts.slice(0, 4).map((post) => (
                            <div className = "postItem" key={post._id}>
                                <Post post={post}></Post>
                            </div>
                        ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Posts
