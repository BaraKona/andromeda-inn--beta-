import React, {useRef, useState} from 'react'
import Countries from '../components/componentSnippets/countries'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {createUser} from '../actions/users'
import './css/signupDetails.scss'

function SignupDetailsPage() {
    const dispatch = useDispatch();
    const history = useHistory()
    const nameRef = useRef()
    const dateRef = useRef()
    const { currentUser } = useAuth()
    const [error, setError] = useState()
    const [ageText, setAgeText] = useState("")
    const [age, setAge] = useState()
    const [location, setLocation] = useState("")
    const [userData, setUserData] = useState({
        userID: '',
        userName: '',
        userEmail: '',
        userLocation: '',
        userSex: '',
        userDateOfBirth: {
            type: Date,
            default: "01.01.200"
        },
        userLanguages: [],})
    const daytoday = Date.now()

    const handleSubmit = (e) => {
        e.preventDefault();
            try {
                dispatch(createUser(userData))
                setError("Your post has been edited")
                history.push('/about')
            } catch (error) {
                setError('failed to edit. Try again later or contact support')
            }
        }

    function calculate_age(dob) {
        dob = new Date(dob)
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);
        setAge(Math.abs(age_dt.getUTCFullYear() - 1970))
        setAgeText("Oh how very young. Still plenty left to do being only ")
    }
    const props= {
        location,
        setLocation
    }
    return (
        <section className="signupDetails">
            <div className="signupDetailsContainer">
            <div className="signupDetailContent">
                <div className ="typewriter">
                    <h1> Hi... Welcome. Fill this form so we can get acquainted </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>What do you want to be called ?<br/></label>
                            <input type="name" ref={nameRef} required onChange={(e)=> setUserData({...userData, userName: e.target.value})} />
                        </div>
                        <div>
                            <label>When did you spawn ? <br/></label>
                            <input type="date" ref={dateRef} onChange={(e)=> calculate_age(e.currentTarget.value)} max="2010-01-02" required />
                            <p> {ageText} {age}</p>
                        </div>
                        <div>
                            <label> In what part of the world do you reside ? <br/></label>
                            <Countries location={props}/>
                        </div>
                        <div>
                            <label> What languages do you speak ? </label>
                            <input type="text" required />
                        </div>
                        <button type="submit"
                        onClick={(e)=> setUserData({...userData,
                        userID: currentUser.uid,
                        userDateOfBirth: age,
                        userLocation: props.location,
                        userEmail: currentUser.email})}> Enter Inn </button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}

export default SignupDetailsPage
