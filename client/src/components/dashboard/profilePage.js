import React, {useState, useRef} from 'react';
import Navbar from '../layout/newNavbar'
import {useAuth} from '../../contexts/AuthContext'
import {NavLink, useLocation} from 'react-router-dom'
import './css/profile.scss'

const Profile = () => {
const { currentUser, logout, displayImg, displayName, updateProfile } = useAuth()
const displayRef = useRef()
const writerRef = useRef()
const worldRef = useRef()
const readerRef = useRef()
const collabRef = useRef()
const editRef = useRef()
const proofRef = useRef()
const rPRef = useRef()
const mapRef = useRef()

const [error, setError] = useState("")
const [loading, setLoading] = useState(false)
const [input, setInput] = useState(false);
const [displayed, setDisplayed] = useState(<p>{displayName()}</p>);

const location = useLocation();//assigning location variable
const { pathname } = location;//destructuring pathname from location
const splitLocation = pathname.split("/");//Javascript split method to get the name of the path in array

    async function handleSubmit(e) {
        e.preventDefault()

        try {
        setError("")
        setLoading(true)
        await updateProfile(displayRef.current.value)
        } catch {
        setError("failed to update Profile")
        console.log(error)
        }

        setLoading(false)
    }
    function isTag (e, tag){
        // setSelected(selected === "not" ? "selected" : "not" )
        if (tag.current.classList == 'selected'){
            tag.current.classList.remove('selected')
            console.log(currentUser)
        }
        else if (tag.current.classList == ''){
            tag.current.classList.add('selected')
        }
    }

    const edit = () => {
        console.log('pressed edit')
        if (input === true){
            setDisplayed(<p>{displayName()}</p>)
            setInput(!input)
            console.log(input)

        }
        else {
            setDisplayed(<input type="text" className ="profileInput" placeholder={displayName()} ref={displayRef}/>)
            setInput(!input)
            console.log(input)
        }
        // setInput (input == <p>{displayName()}</p> ? <input type="email" placeholder={displayName()}/> : <p>{displayName()}</p>)
    }
    function buttonText(){
        if (input === true){
            return('Save')
        }
        else {
            return('edit')
        }
    }

    return(
        <>
        <section className = "profile">
            <Navbar/>
            <div className = "profileContainer">
                <div className="profileSettings">
                    <ul>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/inn/profile"><li> Profile</li></NavLink>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/inn/create-post"> <li>Create Post</li></NavLink>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/inn"><li>item</li></NavLink>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/inn"><li>item</li></NavLink>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/inn"><li>item</li></NavLink>
                    </ul>
                    <hr/>
                    <ul>
                        <NavLink activeClassName="settingActive" exact className="settingLink" to="/about"><li> About </li></NavLink>
                    </ul>
                </div>
                <div className = "profileItems">
                    <div className = "profileName">
                        <h3>{displayName()}</h3>
                    </div>
                    <div className = "profileImgContainer">
                        <img src={displayImg()} className = "profileImg"></img>
                    </div>
                    <hr/>
                    <div className = "profileInfo">
                        <p>Name: {currentUser.displayName}</p>
                        <p>Email: {currentUser.email}</p>
                        <p>Tags: <span>Writer</span>{' '}-{' '}<span>Consumer</span>{' '}-{' '}<span>World Builder</span></p>
                        <p>Member Since: {currentUser.metadata.creationTime}</p>
                    </div>
                    <hr/>
                    <div className = "profileTags">
                        <button onClick={(e) => isTag(e, writerRef)} ref={writerRef}> Writer </button>
                        <button onClick={(e) => isTag(e, worldRef)} ref={worldRef}> World Builder </button>
                        <button onClick={(e) => isTag(e, readerRef)} ref={readerRef}> Reader </button>
                        <button onClick={(e) => isTag(e, collabRef)} ref={collabRef}> Collaborator </button>
                        <button onClick={(e) => isTag(e, editRef)} ref={editRef}> Editor </button>
                        <button onClick={(e) => isTag(e, proofRef)} ref={proofRef}> ProofReader </button>
                        <button onClick={(e) => isTag(e, rPRef)} ref={rPRef}> RP-er </button>
                        <button onClick={(e) => isTag(e, mapRef)} ref={mapRef}> Map Maker </button>
                    </div>
                    <hr/>
                    <div className="aboutMe">
                        <label>About Me</label>
                        <textarea/>
                    </div>
                    <div className="bottomInfo">
                      <p>Last seen: {currentUser.metadata.lastSignInTime}</p>
                    </div>
                </div>
                </div>
                {/* <div className = "editProfile">
                    <form className = "profileInfo" onSubmit={handleSubmit}>
                        <div className = "profileText"><p> Display Name </p>{displayed}</div>
                        <button onClick={edit}> {buttonText()}  </button>
                    </form>
                    <form className = "profileInfo">
                        <div className = "profileText"><p> Email </p><p>{currentUser.email}</p></div>
                        <button> {buttonText()}  </button>
                    </form>
                    <form className = "profileInfo">
                        <div className = "profileText"><p> Password </p> <p>*************</p></div>
                        <button> {buttonText()} </button>
                    </form>
                </div> */}

        </section>
        </>
    );
};

export default Profile;