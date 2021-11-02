import React, {useState, useEffect}from 'react'
import card from '../../images/icons/cards.svg'
import FileBase from 'react-file-base64'
import Dashboard from './dashboardFrame'
import Post from '../post/post'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../contexts/AuthContext'

import {createPost, updatePost} from '../../actions/posts'
import './css/postForm.css'

function PostForm() {
    const [postData, setPostData] = useState({ postCreator: '', postTitle: '', postContent: '', postReContent: '', postGenre: '', selectedFile: ''})
    const {currentUser, currentPostId, setCurrentPostId} = useAuth()
    const posts = useSelector((state) => state.posts);
    const post = useSelector((state) => currentPostId ? state.posts.find((post) => post._id === currentPostId): null);
    const [error, setError] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentPostId) {
            try {
                dispatch(updatePost(currentPostId, postData))
                setError("Your post has been edited")
            } catch (error) {
                setError(error)
            }

        }
        else{
            try {
                setPostData({...postData, postCreator: currentUser.uid})
                dispatch(createPost(postData));
                setError("Noted and Posted")
            } catch (error) {
                setError(error)
            }
        }
        clear()
    }
    const clear = () => {
        setCurrentPostId(null);
        setPostData({ postCreator: '', postTitle: '', postContent: '', postReContent: '', postGenre: '', selectedFile: ''})
    }
    console.log(currentUser.uid)
    return (
    <>
        <Dashboard/>
        <section className="postForm Home">
            <div className = "postFormContainer">
                <div className = "formTitleContainer">
                    <img src={card} alt="card" className="cardIcon"/>
                    <h1> {currentPostId ? 'Edit your post' : 'Post an ad and recruit talent'} </h1>
                    <p> The best way to find people, is to put yourself out there. Be as detailed and thorough as you'd like.
                    </p>
                </div>
                <div className = "postSubContainer">
                    <form onSubmit={handleSubmit} className="postFormForm">
                        <div id="postTitle">
                            <label>Looking for?</label>
                            <input type="text" value={postData.postTitle} onChange={(e) => setPostData({ ...postData, postTitle: e.target.value })} required />
                        </div>
                        <div id="postContent">
                            <label>Details About Project</label>
                            <textarea value={postData.postContent} onChange={(e) => setPostData({ ...postData, postContent: e.target.value })} rows="4" cols="50"required />
                        </div>
                        <div id="postReContent">
                            <label>What you're looking for in people</label>
                            <textarea value={postData.postReContent} onChange={(e) => setPostData({ ...postData, postReContent: e.target.value })} required />
                        </div>
                        <div id="postGenre">
                            <label>Genre&#40;s&#41;</label>
                            <input type="text" value={postData.postGenre} onChange={(e) => setPostData({ ...postData, postGenre: e.target.value })} required />
                        </div>
                        <div className="fileInput">
                            <label> Choose a cover image </label>
                            <FileBase type="file" multiple={false} onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64})} required/>
                        </div>
                            <button className="postSubmit" type="submit" onClick={(e) => setPostData({ ...postData, postCreator: currentUser.uid })}>Submit</button>
                            <button className="postClear" onClick={clear}>Clear</button>
                            <p className = "errorMsg">{error}</p>
                    </form>
                </div>
            </div>
            <div className = "yourPosts">

                <div className = "yourPostContainer">
                    <h1> Your Posts: </h1>
                        <div className ="yourPosts">
                        <p><span> You have 0 Posts left</span></p>
                            {!posts.length ? <div> Loading... </div> : (
                                <div className="postMap"> {posts.slice(0, 3).map((post) => (
                                    <div className = "postItem" key={post._id}>
                                        <Post post={post}></Post>
                                        <button className = "updatePostButton" onClick={() => setCurrentPostId(post._id)}> Update your post?</button>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default PostForm
