import React, {useState, useRef, useEffect} from 'react';
import Navbar from '../layout/newNavbar'
import {useAuth} from '../../contexts/AuthContext'
import {NavLink, useLocation, useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {updateUser} from '../../actions/users'
import './css/profile.scss'

const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { currentUser, displayImg, displayName, updateName, uploadImg, deleteImg, getAllUsers } = useAuth()
    const user = useSelector((state) => currentUser ? state.users.filter((user) => user.userID === currentUser.uid): null);
    const [userData, setUserData] = useState({ userEmail: '', userName: currentUser.displayName, userAbout: user[0].userAbout, userTags: user[0].userTags })
    const [modal, showModal] = useState('')
    const [imageSelected, setImageSelected] = useState("")
    const [loading, setLoading] = useState(false)
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
    const aboutMeRef = useRef()
    const nameRef = useRef()
    const imageRef = useRef()
    const location = useLocation();  //assigning location variable
    const { pathname } = location;  //destructuring pathname from location
    const splitLocation = pathname.split("/");  //Javascript split method to get the name of the path in array

    let userInfo = {}
    try {
    userInfo = {
        name: currentUser.displayName,
        email: currentUser.email,
        location: user[0].userLocation,
        languages: user[0].userLanguages.join(),
        dateOfBirth: user[0].userDateOfBirth,
        memberSince: currentUser.metadata.creationTime,
        sex: user[0].userSex
    }
    } catch (error) {
        userInfo = {
            name: currentUser.displayName,
            email: currentUser.email,
            location: 'N/A',
            languages: 'N/A',
            dateOfBirth: 'N/A',
            memberSince: currentUser.metadata.creationTime,
            sex: 'N/A',
        }
        console.log('error = ' + error)
    }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
        setMessage("")
        setError("")
        setLoading(true)
        await updateName(nameRef.current.value)
        dispatch(updateUser(user[0]._id, userData))
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
    <section className = "profile">
        <Navbar/>
        <div id="myModal" className={`modal ${modal}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p for="avatar">Choose a profile picture:</p>
                <img src={displayImg()} className="profileImg"></img>
                <br/>
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className="fileInput"
                onChange={(e) => {setImageSelected(e.target.files[0])}}/>
                <button className="profileButton" onClick={uploadImage}> Submit </button>
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
                    <h3>{userInfo.name}</h3>
                </div>
                <div className = "profileImgContainer">
                    <img src={displayImg()} className = "profileImg"></img>
                    <button className="profileButton" onClick={openImageEdit}> Edit </button>
                </div>
                <hr/>
                <div className = "profileInfo">
                    <label>Name: </label>
                    <input type="text"  value={userData.userName} ref={nameRef} onChange={(e) => setUserData({...userData, userName: nameRef.current.value})} />
                    <div><p>Email: {userInfo.email}</p><button className="profileButton"> Edit </button></div>
                    <p>Tag&#40;s&#41;: <span>Writer</span>{' '}-{' '}<span>Consumer</span>{' '}-{' '}<span>World Builder</span></p>
                    <p>Member Since: {userInfo.memberSince}</p>
                    <p>Location: {userInfo.location}</p>
                    <p>Sex: {userInfo.sex}</p>
                    <p>D.O.B: {userInfo.dateOfBirth}</p>
                    <p>Language&#40;s&#41;: {userInfo.languages} </p>
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
                    <label>About Me: </label>
                    <textarea value={userData.userAbout} onChange={(e) => setUserData({...userData, userAbout: aboutMeRef.current.value})} ref={aboutMeRef}/>
                </div>
                <div className="bottomInfo">
                    <p>Last seen: {Date(currentUser.metadata.createdAt)}</p>
                    <button className="saveUserButton" onClick={(e) => setUserData({...userData, userTags: profileTag}), handleSubmit}> Save User Info</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Profile;