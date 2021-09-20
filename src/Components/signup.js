import React, { useRef, useState } from 'react'
import './css/signup.css'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [hasAccount, setHasAccount] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !==
        passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch{
            setError('Failed to create an account')
        }

        setLoading(false)

        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <section className = "login">
            <div onSubmit ={handleSubmit} className = "loginContainer">
                {JSON.stringify(currentUser)}
                <label> Email {currentUser && currentUser.email} </label>
                <input type = "email" red={emailRef} required/>
                <p className = "errorMsg"></p>
                <label> Password </label>
                <input type = "password" ref={passwordRef} required/>
                <p className = "errorMsg"></p>
                <label> Confirm Password </label>
                <input type = "password" ref={passwordConfirmRef} required/>
                <p className = "errorMsg"></p>
                <div className = "btnContainer">
                    <button disabled={loading} type = "submit"> Sign up </button>
                    <p>Already have an account ? <span> Sign in </span></p>
                </div>
            </div>
        </section>
    )
}

