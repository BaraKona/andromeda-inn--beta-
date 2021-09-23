import React, {useState, useEffect } from 'react'
import fire from '../Api/firebase'
import Signup from '../Components/signup'
import Navbar from '../Components/navbar'
import MainPage from './MainPage.js'

function SignupPage() {
  const [ user, setUser ] = useState ('')
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ emailError, setEmailError ] = useState('')
  const [ passwordError, setPasswordError ] = useState('')
  const [ hasAccount, setHasAccount ] = useState(false)
  const CurrentUser = user;

  const clearInputs = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }


  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
        setEmailError(err.message);
        break;
        case "auth/wrong-password":
        setPasswordError(err.message);
        break;
      }
    });
  };


  const handleSignup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password).then(authUser => {
      return authUser.user.updateProfile({
        displayName: username,
      })
    })
    .catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        setEmailError(err.message);
        break;
        case "auth/weak-password":
        setPasswordError(err.message);
        break;
      }
    });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

    return (
        <div>
            <Navbar
            handleLogOut = {handleLogOut}
            setUser = {setUser}        />
            {user ? (
                <MainPage handleLogout = {handleLogOut}/>
            ) : (
                <Signup
                    CurrentUser
                    user = {user}
                    setUser = {setUser}
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}/>
            )}

        </div>
    )
}

export default SignupPage;