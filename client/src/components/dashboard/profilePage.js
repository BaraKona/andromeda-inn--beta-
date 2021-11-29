import React, {useState, useRef, useEffect} from 'react';
import Navbar from '../layout/newNavbar'
import {useAuth} from '../../contexts/AuthContext'
import {NavLink, useLocation} from 'react-router-dom'
import './css/profile.scss'

const Profile = () => {
const { currentUser, displayImg, displayName, updateName, uploadImg, deleteImg, getAllUsers } = useAuth()
const [modal, showModal] = useState('')
const [imageSelected, setImageSelected] = useState("")
const [loading, setLoading] = useState(false)
const [displayed, setDisplayed] = useState(<p>{displayName()}</p>);
const [message, setMessage] = useState("")
const [error, setError] = useState("")
const [profileTag, setProfileTag] = useState([])
const writerRef = useRef()
const worldRef = useRef()
const readerRef = useRef()
const collabRef = useRef()
const editRef = useRef()
const proofRef = useRef()
const rPRef = useRef()
const mapRef = useRef()
const nameRef = useRef()
const imageRef = useRef()

const location = useLocation();  //assigning location variable
const { pathname } = location;  //destructuring pathname from location
const splitLocation = pathname.split("/");  //Javascript split method to get the name of the path in array
console.log(currentUser)

  useEffect(() =>{
  },[currentUser.displayName])


  async function handleNameSubmit(e) {
    e.preventDefault()
    try {
        setMessage("")
        setError("")
        setLoading(true)
        await updateName(nameRef.current.value)
        setMessage("Check your inbox for further instructions")
        console.log(message)
    } catch {
        setError("Failed to update Name")
        console.log(error)
    }
        setLoading(false)
  }
  async function uploadImage (e) {
    e.preventDefault()
    if(currentUser.photoURL === null){
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "mcv9vtvq")
        try {
            await uploadImg(formData)
            setError("nice")
            console.log(error)
        } catch (error) {
            setError(error)
            console.log(error)
        }
    }
    else{
        const formData = new FormData();
        const formDeleteData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "khig7cgl")
        formDeleteData.append("file", currentUser.photoUrl);
        formDeleteData.append("upload_preset", "khig7cgl")
        try {
            await deleteImg(formData)
            setError("nice")
            console.log(error)
        } catch (error) {
            setError(error)
            console.log(error)
        }
    }
  }

  function openImageEdit(){
    showModal(modal === '' ? 'show' : '')
  }
  function closeModal (){
    showModal('')
  }

  function isTag (e, tag){
    // setSelected(selected === "not" ? "selected" : "not" )
    if (tag.current.classList == 'selected'){
        tag.current.classList.remove('selected')
        setProfileTag(profileTag.filter(item => item !== tag.current.outerText))
    }
    else if (tag.current.classList == ''){
        tag.current.classList.add('selected')
        setProfileTag(profileTag => [...profileTag, tag.current.outerText])
    }
  }
    return(
    <>
        <section className = "profile">
            <Navbar/>
            <div id="myModal" class={`modal ${modal}`}>
                <div class="modal-content">
                    <span class="close" onClick={closeModal}>&times;</span>
                    <p for="avatar">Choose a profile picture:</p>
                    <img src={displayImg()} className="profileImg"></img>
                    <br/>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className="fileInput"
                    onChange={(e) => {setImageSelected(e.target.files[0])}}/>
                    <button class="profileButton" onClick={uploadImage}> Submit </button>
                </div>
            </div>
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
                <div className = "profileItems">
                    <div className = "profileName">
                        <h3>{currentUser.displayName}</h3>
                    </div>
                    <div className = "profileImgContainer">
                        <img src={displayImg()} className = "profileImg"></img>
                        <button className="profileButton" onClick={openImageEdit}> Edit </button>
                    </div>
                    <hr/>
                    <div className = "profileInfo">
                        <label>Name: </label>
                        <input type="text" ref={nameRef} placeholder={currentUser.displayName}/>
                        <button class="profileButton" onClick={handleNameSubmit}> Submit </button>

                        <p>Email: {currentUser.email}</p>
                        <p>Tag&#40;s&#41;: <span>Writer</span>{' '}-{' '}<span>Consumer</span>{' '}-{' '}<span>World Builder</span></p>
                        <p>Member Since: {currentUser.metadata.creationTime}</p>
                        <p>Location: </p>
                        <p>Sex: </p>
                        <p>D.O.B: </p>
                        <p>Language&#40;s&#41;: </p>
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
                    <p>{profileTag.join(' ')}</p>
                    <hr/>
                    <div className="aboutMe">
                        <label>About Me</label>
                        <textarea/>
                    </div>
                    <div className="bottomInfo">
                      <p>Last seen: {Date(currentUser.metadata.createdAt)}</p>
                    </div>
                </div>
                </div>
        </section>
    </>
    );
};

export default Profile;