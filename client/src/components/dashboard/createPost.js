import React, {useState}from 'react'
import card from '../../images/icons/cards.svg'
import FileBase from 'react-file-base64'
import Dashboard from '../../views/dashboardPage'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../contexts/AuthContext'

import {createPost} from '../../actions/posts'
import './css/postForm.css'

function PostForm() {
    const [postData, setPostData] = useState({ postCreator: '', postTitle: '', postContent: '', postReContent: '', postGenre: '', selectedFile: ''})
    const {currentUser} = useAuth()
    const [error, setError] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setPostData({...postData, postCreator: currentUser.displayName})
            dispatch(createPost(postData));
            setError("Noted and Posted")
        } catch (error) {
            setError(error)
        }

    }
    const clear = () => {

    }
    console.log(currentUser)
    return (
    <>
        <Dashboard/>
        <section className="postForm Home">
            <div className = "postFormContainer">
                <div className = "formTitleContainer">
                    <img src={card} alt="card" className="cardIcon"/>
                    <h1> Post and ad and recruit talent </h1>
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
                            <FileBase type="file" multiple={false} onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64})} required/>
                        </div>
                            <button className="postSubmit" type="submit">Submit</button>
                            <button className="postClear" onClick={clear}>Clear</button>
                            <p className = "errorMsg">{error}</p>
                    </form>
                </div>
            </div>
        </section>
    </>
    )
}

export default PostForm
