import React, {useState, useRef} from 'react';
import Dashboard from './dashboardFrame'
import {useAuth} from '../../contexts/AuthContext'
import './css/profile.css'

const Profile = () => {
const { currentUser, logout, displayImg, displayName, updateProfile } = useAuth()
const displayRef = useRef()
const [error, setError] = useState("")
const [loading, setLoading] = useState(false)
const [input, setInput] = useState(false);
const [displayed, setDisplayed] = useState(<p>{displayName()}</p>);

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
        <Dashboard/>
        <section className = "profile Home">
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
                </div>
            </div>
        </section>
        </>
    );
};

export default Profile;