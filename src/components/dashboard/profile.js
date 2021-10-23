import React from 'react';
import {Switch} from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'
import '../css/profile.css'

const Profile = () => {
const { currentUser, logout, displayImg, displayName } = useAuth()
    return(
        <>
        <section className = "profile">
            <div className = "profileContainer">
                <div className = "profileItems">
                    <div className = "profileImgContainer"><img src={displayImg()} className = "profileImg"></img></div>
                    <div className = "profileName">
                        <h3>{displayName()}</h3>
                        <p>{currentUser.email}</p>
                        <p><span>Writer</span>{' '}-{' '}<span>Consumer</span>{' '}-{' '}<span>World Builder</span></p>
                    </div>
                </div>
                <div className = "editProfile">

                </div>
            </div>
        </section>
        </>
    );
};

export default Profile;