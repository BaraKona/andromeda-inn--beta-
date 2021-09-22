import React, { useRef, useState } from 'react'
import './css/signup.css'

export default function Signup(props) {
    const{
        username,
        setUsername,
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

    // function signInSignOut(props){
    //     const hasAccount = props.hasAccount;
    //     if (hasAccount){
    //         return<><button>Sign in</button><p>Don't have an account ? <span> Sign up</span></p></>
    //     }else{
    //         return<><button>Sign up</button><p>Have an account ? <span> Sign in</span> </p></>
    //     }
    // }

    return (
        <section className = "login">
            <div className = "loginContainer">
                <label> Email </label>
                <input type = "email" autoFocus required value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <p className = "errorMsg">{emailError}</p>
                <label> Password </label>
                <input type = "password" required value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <p className = "errorMsg">{passwordError}</p>
                {/* <label> Confirm Password </label>
                <input type = "password" />
                <p className = "errorMsg"></p> */}
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}> Login </button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}> Register here!
                        </span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}> Register </button>
                        <p>Already have an account? <span onClick={() => setHasAccount(!hasAccount)}> Login here! </span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

