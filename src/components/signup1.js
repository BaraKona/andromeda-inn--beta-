import React, { useRef, useState, useEffect } from 'react'
import './css/signup.css'

export default function Signup(props) {
    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;


    return (
        <section className = "login">
            <div className = "loginContainer">
                <label> Email </label>
                <input type = "email" autoFocus required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="andromeda_inn@email.end"/>
                <p className = "errorMsg">{emailError}</p>

                <label> Password </label>
                <input type = "password" required value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="StrongPassword224!"/>
                <p className = "errorMsg">{passwordError}</p>

                    {hasAccount ? (
                        <div className="btnContainer">
                            <button onClick={handleLogin}> Login </button>
                            <p>Don't have an account? <span
                            onClick={() => {setHasAccount(!hasAccount);}}> Register here!
                            </span></p>
                        </div>
                    ) : (
                        <div className="btnContainer">
                            <label> Confirm Password </label>
                            <input type = "password" />
                            <p className = "errorMsg"></p>
                            <button onClick={handleSignup}> Register </button>
                            <p>Already have an account? <span
                            onClick={() => {setHasAccount(!hasAccount);}}> Login here!
                            </span></p>
                        </div>
                    )}
            </div>
        </section>
    )
}

