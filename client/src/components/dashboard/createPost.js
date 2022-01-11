import React, {useState, useEffect, useRef}from 'react'
import FileBase from 'react-file-base64'
import Navbar from '../layout/newNavbar'
import Post from '../post/profilePost'
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../contexts/AuthContext'
import {createPost, updatePost, deletePost} from '../../actions/posts'
import './css/postForm.scss'

const Profile = () => {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({ postCreator: '', postTitle: '', postContent: '', postReContent: '', postGenre: [], selectedFile: '', postType: [], postCollab: []})
    const {currentUser, currentPostId, setCurrentPostId} = useAuth()
    const posts = useSelector((state) => currentUser ? state.posts.filter((posts) => posts.postCreator === currentUser.uid): null);
    const editPost = useSelector((state) => currentPostId ? state.posts.find((post) => post._id === currentPostId && post.postCreator === currentUser.uid): null);
    const [error, setError] = useState("")
    const [genres, setGenres] = useState([])
    const [collab, setCollab] = useState([])
    const [types, setTypes] = useState([])
    const [typeCounter, setTypeCounter] = useState(0)
    const [collabCounter, setCollabCounter] = useState(0)
    const fantasyRef = useRef()
    const sciFiRef = useRef()
    const horrorRef = useRef()
    const romanceRef = useRef()
    const grimRef = useRef()
    const mythologyRef = useRef()
    const rPRef = useRef()
    const adventureRef = useRef()
    const warRef = useRef()
    const lGBTQRef = useRef()
    const mysteryRef = useRef()
    const actionRef = useRef()
    const comedyRef = useRef()
    const historyRef = useRef()
    const shortRef = useRef()
    const poetryRef = useRef()
    const crimeRef = useRef()
    const psychoRef = useRef()
    const mentorRef = useRef()
    const lFMRef = useRef()
    const sStoryRef = useRef()
    const mComicRef = useRef()
    const webNovelRef = useRef()
    const cYOAdventureRef = useRef()
    const fFictionRef = useRef()
    const collaborationRef = useRef()
    const accountabilityRef = useRef()

    console.log(currentUser)
    useEffect(() => {
        if(editPost) setPostData(editPost)
    }, [editPost, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentPostId) {
            try {
                // setPostData({...postData, postGenre: genres})
                dispatch(updatePost(currentPostId, postData))
                setError("Your post has been edited")
            } catch (error) {
                setError('failed to edit. Try again later or contact support')
            }
        } else{
            try {
                if(posts.length === 3){
                    setError("You have reached your maximum number of posts. Please delete a post to make another. Alternatively, you could edit a post :P")
                }else {
                    dispatch(createPost(postData));
                    setError("Noted and Posted")
                }
            } catch (error) {
                setError(error)
            }
        }clear()
    }
    function isTag (e, tag){
        e.preventDefault()
        if (tag.current.classList == 'selected') {
            tag.current.classList.remove('selected')
            setGenres(genres.filter(item => item !== tag.current.outerText))
        }
        else if (tag.current.classList == ''){
            tag.current.classList.add('selected')
            setGenres(genres => [...genres, tag.current.outerText])
        }
    }
    function isType (e, tag){
        e.preventDefault()
        if (tag.current.classList == 'selected' && typeCounter == 1){
            tag.current.classList.remove('selected')
            setTypes(types.filter(item => item !== tag.current.outerText))
            setTypeCounter(0)
        }
        else if (tag.current.classList == '' && typeCounter == 0){
            tag.current.classList.add('selected')
            setTypes(types => [...types, tag.current.outerText])
            setTypeCounter(1)
        }
    }
    function isCollab (e, tag){
        e.preventDefault()
        if (tag.current.classList == 'selected' && collabCounter == 1){
            tag.current.classList.remove('selected')
            setCollab(collab.filter(item => item !== tag.current.outerText))
            setCollabCounter(0)
        }
        else if (tag.current.classList == '' && collabCounter == 0){
            tag.current.classList.add('selected')
            setCollab(collab => [...collab, tag.current.outerText])
            setCollabCounter(1)
        }
    }
    const clear = () => {
        setCurrentPostId(null);
        setPostData({ postCreator: '', postTitle: '', postContent: '', postReContent: '', postGenre: '', selectedFile: '', postType: ''})
        // setError("")
    }
    const updatePostClick = (postId) => {
        setCurrentPostId(postId)
        window.scrollTo({
            top: 0,
            behavior:  'smooth'
        })
    }
    return(
        <>
        <section className = "profile">
            <Navbar/>
            <div className = "profileContainer">
                <div className="profileSettings">
                    <ul>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/inn/profile"><li> Profile</li></NavLink>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/inn/profile/create-post"> <li>Create Post</li></NavLink>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/inn/Projects"><li>Projects</li></NavLink>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/inn"><li>item</li></NavLink>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/inn"><li>item</li></NavLink>
                    </ul>
                    <hr/>
                    <ul>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/about"><li> About </li></NavLink>
                    </ul>
                </div>
                <div className = "postSubContainer">
                    <form onSubmit={handleSubmit} className="postFormForm">
                        <div className="postHeader">
                            <h3> What are you looking for ?</h3>
                            <p> The best way to find people is to put yourself out there. Be as detailed and thorough as you'd like.</p>
                        </div>
                        <div id="postTitle">
                            <label>Post Title: What are you looking for?</label>
                            <input type="text" value={postData.postTitle} onChange={(e) => setPostData({ ...postData, postTitle: e.target.value })} required maxLength="30"/>
                        </div>
                        <div id="postContent">
                            <label>Details about Project</label>
                            <textarea value={postData.postContent} onChange={(e) => setPostData({ ...postData, postContent: e.target.value })} rows="4" cols="50"required />
                        </div>
                        <div id="postReContent">
                            <label>Who are you looking for ? </label>
                            <textarea value={postData.postReContent} onChange={(e) => setPostData({ ...postData, postReContent: e.target.value })} required />
                        </div>
                        <div id="postGenre">
                            <label>Genre&#40;s&#41;</label>
                            <div className = "profileTags">
                                <button onClick={(e) => isTag(e, fantasyRef)} ref={fantasyRef}> Fantasy </button>
                                <button onClick={(e) => isTag(e, sciFiRef)} ref={sciFiRef}> Sci-fi </button>
                                <button onClick={(e) => isTag(e, horrorRef)} ref={horrorRef}> Horror </button>
                                <button onClick={(e) => isTag(e, romanceRef)} ref={romanceRef}> Romance </button>
                                <button onClick={(e) => isTag(e, grimRef)} ref={grimRef}> Grim-Dark </button>
                                <button onClick={(e) => isTag(e, mythologyRef)} ref={mythologyRef}> Mythology </button>
                                <button onClick={(e) => isTag(e, rPRef)} ref={rPRef}> RP-er </button>
                                <button onClick={(e) => isTag(e, adventureRef)} ref={adventureRef}> Adventure </button>
                                <button onClick={(e) => isTag(e, warRef)} ref={warRef}> War </button>
                                <button onClick={(e) => isTag(e, lGBTQRef)} ref={lGBTQRef}> LGBTQ+ </button>
                                <button onClick={(e) => isTag(e, mysteryRef)} ref={mysteryRef}> Mystery </button>
                                <button onClick={(e) => isTag(e, actionRef)} ref={actionRef}> Action </button>
                                <button onClick={(e) => isTag(e, comedyRef)} ref={comedyRef}> Comedy </button>
                                <button onClick={(e) => isTag(e, historyRef)} ref={historyRef}> Historical </button>
                                <button onClick={(e) => isTag(e, shortRef)} ref={shortRef}> Short Story </button>
                                <button onClick={(e) => isTag(e, poetryRef)} ref={poetryRef}> Poetry </button>
                                <button onClick={(e) => isTag(e, crimeRef)} ref={crimeRef}> Crime </button>
                                <button onClick={(e) => isTag(e, psychoRef)} ref={psychoRef}> Psychological </button>
                            </div>
                            <p onChange={(e) => setPostData({ ...postData, postGenre: e.target.value })}>{genres.join(' ')}</p>
                            <hr/>
                            {/* <input type="text" value={postData.postGenre} onChange={(e) => setPostData({ ...postData, postGenre: e.target.value })} required /> */}
                        </div>
                        <div id="postType">
                            <label> Post Type &#40;select one&#41;</label>
                            <div className = "profileTags">
                                <button onClick={(e) => isType(e, lFMRef)} ref={lFMRef}> Long-form Novel </button>
                                <button onClick={(e) => isType(e, sStoryRef)} ref={sStoryRef}> Short Story </button>
                                <button onClick={(e) => isType(e, mComicRef)} ref={mComicRef}> Manga / Comic </button>
                                <button onClick={(e) => isType(e, webNovelRef)} ref={webNovelRef}> Web Novel </button>
                                <button onClick={(e) => isType(e, cYOAdventureRef)} ref={cYOAdventureRef}> Choose Your Own Adventure </button>
                                <button onClick={(e) => isType(e, fFictionRef)} ref={fFictionRef}> Fan Fiction </button>
                            </div>
                            <p onChange={(e) => setPostData({ ...postData, postGenre: e.target.value })}>{types.join(' ')}</p>
                            <hr/>
                        </div>
                        <div id="postCollaboration">
                            <label> Collaboration Type &#40;select one&#41;</label>
                            <div className = "profileTags collaboration">
                                <button onClick={(e) => isCollab(e, collaborationRef)} ref={collaborationRef}> Collaboration </button>
                                <button onClick={(e) => isCollab(e, accountabilityRef)} ref={accountabilityRef}> Accountability </button>
                                <button onClick={(e) => isCollab(e, mentorRef)} ref={mentorRef}> Mentorship </button>
                            </div>
                            <p onChange={(e) => setPostData({ ...postData, postGenre: e.target.value })}>{collab.join(' ')}</p>
                            <hr/>
                        </div>
                        <div className="fileInput">
                            <label> Choose a cover image &#40;Jpeg only&#41;</label>
                            <FileBase type="file" multiple={false} onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64})} required/>
                        </div>
                        <div className = "formButtons">
                            <button className="postSubmit" type="submit" onClick={(e) => setPostData({ ...postData, postCreator: currentUser.uid, postGenre: genres, postType: types, postCollab: collab})}>Submit</button>
                            <button className="postClear" onClick={clear}>Clear</button>
                        </div>
                            <p className = "errorMsg">{error}</p>
                    </form>
                </div>
            </div>
            <div className = "yourPosts">
                <div className = "yourPostContainer">
                    <h3> Your Posts: </h3>
                    <div className ="">
                    <p><span> You have {3 - posts.length} / 3 Posts left </span></p>
                        {!posts.length ? <div> Loading... </div> : (
                            <div className="profilePostMap"> {posts.map((post) => (
                                <div className = "profilePostItem" key={post._id}>
                                    <div className = "postButtons">
                                        <button className = "updatePostButton" onClick={(e) => updatePostClick(post._id)}> Update your post?</button>
                                        <button className = "deletePostButton" onClick={() => dispatch(deletePost(post._id))}> Delete your post?</button>
                                    </div>
                                    <Post post={post}></Post>
                                </div>
                            ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Profile;