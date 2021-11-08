import React, {useState, useEffect}from 'react'
import card from '../../images/icons/cards.svg'
import FileBase from 'react-file-base64'
import Dashboard from './dashboardFrame'
import Post from '../post/post'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../contexts/AuthContext'
import {createPost, updatePost, deletePost} from '../../actions/posts'
import './css/postForm.css'

function PostForm() {
    const [postData, setPostData] = useState({ postCreator: '', postTitle: '', postContent: '', postReContent: '', postGenre: '', selectedFile: ''})
    const {currentUser, currentPostId, setCurrentPostId} = useAuth()
    const posts = useSelector((state) => currentUser ? state.posts.filter((posts) => posts.postCreator === currentUser.uid): null);
    // const posts = useSelector((state) => state.posts);
    const editPost = useSelector((state) => currentPostId ? state.posts.find((post) => post._id === currentPostId && post.postCreator === currentUser.uid): null);
    const [error, setError] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        if(editPost) setPostData(editPost)
    }, [editPost, dispatch])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentPostId) {
            try {
                dispatch(updatePost(currentPostId, postData))
                setError("Your post has been edited")
            } catch (error) {
                setError('failed to edit. Try again later or contact support')
            }

        }
        else{
            try {
                if(posts.length == 3){
                    setError("You have reached your maximum number of posts. Please delete one to make another :)")
                }
                else {
                    setPostData({...postData, postCreator: currentUser.uid})
                    dispatch(createPost(postData));
                    setError("Noted and Posted")
                }

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
    console.log('print ' + posts)
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
                        <p><span> You have {3 - posts.length} / 3 Posts left </span></p>
                            {!posts.length ? <div> Loading... </div> : (
                                <div className="postMap"> {posts.map((post) => (
                                    <div className = "postItem" key={post._id}>
                                        <Post post={post}></Post>
                                        <div className = "postButtons">
                                            <button className = "updatePostButton" onClick={() => setCurrentPostId(post._id)}> Update your post?</button>
                                            <button className = "deletePostButton" onClick={() => dispatch(deletePost(post._id))}> Delete your post?</button>
                                            {/* <button className = "deletePostButton" onClick={() => dispatch(deletePost(post._id))}> Delete your post?</button> */}
                                        </div>
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
