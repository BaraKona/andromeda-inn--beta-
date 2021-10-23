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
                <hr/>
                <div className = "editProfile">
                    <div className = "profileInfo">
                        <div className = "profileText"><p> Display Name </p><p>{displayName()}</p></div>
                        <button> Edit </button>
                    </div>
                    <div className = "profileInfo">
                        <div className = "profileText"><p> Email </p><p>{currentUser.email}</p></div>
                        <button> Edit </button>
                    </div>
                    <div className = "profileInfo">
                        <div className = "profileText"><p> Password </p> <p>*************</p></div>
                        <button> Change </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Profile;