import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatePost, updatePostComment } from '../../actions/posts'
import { getPosts } from '../../actions/posts'
import { useAuth } from '../../contexts/AuthContext'
import Navbar from '../layout/newNavbar'
import Post from '../post/post'
import PostView from '../post/postView'
import './css/discover.scss'

function Discover() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts); // Get all posts
    const users = useSelector((state) => state.users);
    const {currentUser, currentPostId, setCurrentPostId} = useAuth()
    // console.log(currentUser)
    // console.log(posts)
    const [postComment, setPostComment] = useState({postComments: []})
    const [commentArray, setCommentArray] = useState([])
    const [modal, showModal] = useState('')
    const [showCat, setShowCat] = useState('')
    const [showTyp, setShowTyp] = useState('')
    const [showCol, setShowCol] = useState('')
    const [error, setError] = useState('')
    const [currentPost, setCurrentPost] = useState({postGenre: ['fantasy']})
    const [filteredPosts, setFilteredPosts] = useState([])
    const [currentPostComment, setCurrentPostComment] = useState([])
    const allRef = useRef()
    const fantasyRef = useRef()
    const sciFiRef = useRef()
    const horrorRef = useRef()
    const romanceRef = useRef()
    const grimRef = useRef()
    const mythologyRef = useRef()
    const rPRef = useRef()
    const adventureRef = useRef()
    const warRef = useRef()
    const mentorRef = useRef()
    const lGBTQRef = useRef()
    const mysteryRef = useRef()
    const actionRef = useRef()
    const comedyRef = useRef()
    const historyRef = useRef()
    const shortRef = useRef()
    const poetryRef = useRef()
    const crimeRef = useRef()
    const psychoRef = useRef()
    const lFMRef = useRef()
    const sStoryRef = useRef()
    const mComicRef = useRef()
    const webNovelRef = useRef()
    const cYOAdventureRef = useRef()
    const fFictionRef = useRef()
    const collaborationRef = useRef()
    const accountabilityRef = useRef()

    useEffect(() => {
        setFilteredPosts(posts)
      }, [posts, dispatch])

    const submitComment = (e) => {
        e.preventDefault()
        try {
            dispatch(updatePostComment(currentPostId, postComment))
            console.log(postComment)
            setError("Sent")
        } catch (error) {
            setError('failed to edit. Try again later or contact support')
            console.log(error)
        }
    }
    const showCategory = () =>{
        setShowCat(showCat === '' ? 'active' : '')
    }
    const showType = () =>{
        setShowTyp(showTyp === '' ? 'active' : '')
    }
    const showCollab = () =>{
        setShowCol(showCol === '' ? 'active' : '')
    }
    function filterGenrePosts(e, filter){
        e.preventDefault()
        if (filter.current.outerText == 'All'){
            setFilteredPosts(posts)
        }
        else{
            setFilteredPosts(posts.filter((posts) => posts.postGenre.includes(filter.current.outerText)))
        }
    }
    function filterCollabPosts(e, filter){
        e.preventDefault()
        setFilteredPosts(posts.filter((posts) => posts.postCollab == filter.current.outerText))
    }
    function filterTypePosts(e, filter){
        e.preventDefault()
        setFilteredPosts(posts.filter((posts) => posts.postType == filter.current.outerText))
    }
    function openPost(postId, post){
        setCurrentPostId(postId)
        setCurrentPost(post)
        showModal(modal === '' ? 'show' : '')
    }
    function closeModal (){
        showModal('')
        setPostComment([])
    }
    return (
        <section className="discover">
            <Navbar/>
            <div className={`postModal ${modal}`}>
                <div className="postModal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="flex wrap">
                        <div className = "postItem postWide" key={currentPost._id}>
                            <PostView post={currentPost}></PostView>
                        </div>
                        <div className="postViewChat">
                            <h2> Chat: </h2>
                            <p></p>
                            <textarea
                              className="chatInput"
                              type="text"
                              placeholder="Be kind"
                              name="comment"
                              onChange={(e) => setPostComment({postComments : [{commenter: currentUser.uid, comment: e.target.value, commentTime: Date.now()}]})}/>
                              <button className="button buttonGreen" onClick={submitComment}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className ="discoverContainer container">
                <div className="discoverMenu">
                <div className="discoverCategory">
                    <button className="categoryButton" onClick={showCategory}>Categories</button>
                    <div className={`categoryMenu ${showCat}`}>
                        <a href="#" onClick={(e) => filterGenrePosts(e, allRef)} ref={allRef}> All </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, fantasyRef)} ref={fantasyRef}>Fantasy</a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, sciFiRef)} ref={sciFiRef}> Sci-fi </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, horrorRef)} ref={horrorRef}> Horror </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, romanceRef)} ref={romanceRef}> Romance </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, grimRef)} ref={grimRef}> Grim-Dark </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, mythologyRef)} ref={mythologyRef}> Mythology </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, rPRef)} ref={rPRef}> RP-er </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, adventureRef)} ref={adventureRef}> Adventure </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, warRef)} ref={warRef}> War </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, lGBTQRef)} ref={lGBTQRef}> LGBTQ+ </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, mysteryRef)} ref={mysteryRef}> Mystery </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, actionRef)} ref={actionRef}> Action </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, comedyRef)} ref={comedyRef}> Comedy </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, historyRef)} ref={historyRef}> Historical </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, shortRef)} ref={shortRef}> Short Story </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, poetryRef)} ref={poetryRef}> Poetry </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, crimeRef)} ref={crimeRef}> Crime </a>
                        <a href="#" onClick={(e) => filterGenrePosts(e, psychoRef)} ref={psychoRef}> Psychological </a>
                    </div>
                </div>
                <div className="discoverCol">
                    <button className="categoryButton" onClick={showCollab}>Collaboration Types</button>
                    <div className={`colMenu ${showCol}`}>
                        <a href="#" onClick={(e) => filterCollabPosts(e, collaborationRef)} ref={collaborationRef}> Collaboration </a>
                        <a href="#" onClick={(e) => filterCollabPosts(e, accountabilityRef)} ref={accountabilityRef}> Accountability </a>
                        <a href="#" onClick={(e) => filterCollabPosts(e, mentorRef)} ref={mentorRef}> Mentorship </a>
                    </div>
                </div>
                <div className="discoverType">
                    <button className="categoryButton" onClick={showType}>Project Types</button>
                    <div className={`typeMenu ${showTyp}`}>
                    <a href="#" onClick={(e) => filterTypePosts(e, lFMRef)} ref={lFMRef}> Long-form Novel </a>
                    <a href="#" onClick={(e) => filterTypePosts(e, sStoryRef)} ref={sStoryRef}> Short Story </a>
                    <a href="#" onClick={(e) => filterTypePosts(e, mComicRef)} ref={mComicRef}> Manga / Comic </a>
                    <a href="#" onClick={(e) => filterTypePosts(e, webNovelRef)} ref={webNovelRef}> Web Novel </a>
                    <a href="#" onClick={(e) => filterTypePosts(e, cYOAdventureRef)} ref={cYOAdventureRef}> Choose Your Own Adventure </a>
                    <a href="#" onClick={(e) => filterTypePosts(e, fFictionRef)} ref={fFictionRef}> Fan Fiction </a>
                    </div>
                </div>
                </div>
                <div>
                    <div className="discoverProject">
                        <div className ="recentPosts">
                            {error}
                            {!posts.length ? <div> Loading... there may not be any posts here </div> : (
                                <div className="postMap"> {filteredPosts.map((post) => (
                                    <div onClick={(e) => openPost(post._id, post)} className = "postItem shadow scale" key={post._id}>
                                        <Post post={post}></Post>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="discoverProfile"></div>
                </div>
            </div>

        </section>
    )
}

export default Discover
