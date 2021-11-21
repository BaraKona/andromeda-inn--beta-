import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../layout/newNavbar'
import Post from '../post/post'
import './css/discover.scss'

function Discover() {
    const [showCat, setShowCat] = useState('')
    const [showTyp, setShowTyp] = useState('')
    const [showCol, setShowCol] = useState('')
    const posts = useSelector((state) => state.posts); // Get all posts

    const showCategory = () =>{
        setShowCat(showCat === '' ? 'active' : '')
        console.log(showCat)
    }
    const showType = () =>{
        setShowTyp(showTyp === '' ? 'active' : '')
        console.log(showTyp)
    }
    const showCollab = () =>{
        setShowCol(showCol === '' ? 'active' : '')
    }

    return (
        <section className="discover">
            <Navbar/>
            <div className ="discoverContainer">
                <div className="discoverMenu">
                <div className="discoverCategory">
                    <button className="categoryButton" onClick={showCategory}>Categories</button>
                    <div className={`categoryMenu ${showCat}`}>
                        <a href="#">Fantasy</a>
                        <a href="#">Sci-fi</a>
                        <a href="#">Horror</a>
                        <a href="#">Romance</a>
                        <a href="#">Grim-dark</a>
                        <a href="#">Mythology</a>
                        <a href="#">Role Play</a>
                        <a href="#">Adventure</a>
                        <a href="#">War</a>
                        <a href="#">LGBTQ+</a>
                        <a href="#">Mystery</a>
                        <a href="#">Action</a>
                        <a href="#">Comedy</a>
                        <a href="#">History</a>
                        <a href="#">Short Story</a>
                        <a href="#">Poetry</a>
                        <a href="#">Crime</a>
                        <a href="#">Psychological</a>
                    </div>
                </div>
                <div className="discoverCol">
                    <button className="categoryButton" onClick={showCollab}>Collaboration Types</button>
                    <div className={`colMenu ${showCol}`}>
                        <a href="#"> Co-write</a>
                        <a href="#"> Accountability Partnership </a>
                    </div>
                </div>
                <div className="discoverType">
                    <button className="categoryButton" onClick={showType}>Project Types</button>
                    <div className={`typeMenu ${showTyp}`}>
                        <a href="#"> Long-form Novel </a>
                        <a href="#"> Short Story </a>
                        <a href="#"> Manga </a>
                        <a href="#"> Comic </a>
                        <a href="#"> Choose your own adventure </a>
                        <a href="#"> Fan Fiction </a>
                    </div>
                </div>
                </div>
                <div>
                    <div className="discoverProject">
                        <div className ="recentPosts">
                            {!posts.length ? <div> Loading... </div> : (
                                <div className="postMap"> {posts.map((post) => (
                                    <div className = "postItem" key={post._id}>
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
