import React from 'react'
import './css/signup.css'

export default function signup() {
    return (
        <section className = "login">
            <div className = "loginContainer">
                <label> Username </label>
                <input type = "text" />
                <p className = "errorMsg"></p>
                <label> Password </label>
                <input type = "password"/>
                <p className = "errorMsg"></p>
                <div className = "btnContainer">
                    <button> Sign in </button>
                    <p>Don't have an account ? <span> Sign up </span></p>
                </div>
            </div>
        </section>
    )
}

