import './css/navbar.css'
import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import img from '../../images/icons/magicbook2.svg'


const Navbar = () => {
  const { currentUser, logout, displayImg, displayName} = useAuth();
  const {aboutRef, homeRef, loginRef} = useRef()
  const [mobileMenu, setMobileMenu] = useState("");
  const [navPath, setNavPath] = useState("");

  const switchMobile = () =>{
    setMobileMenu( mobileMenu === "" ? "active" : "" )
  }
  function loggedIn(){
    if (currentUser !== null){
      return <>
        <li className={`nav-item ${mobileMenu}`} ref={aboutRef} id="Home">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className={`nav-item ${mobileMenu}`} ref={homeRef}>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        {/* <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link" to="/explore"> Explore</Link>
        </li> */}
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link" to="/" id="centerImg"><img className="iconImg" src ={img} alt="centerImg"></img></Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link"  to="/dashboard"> Dashboard </Link>
        </li>
        {/* <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link"  to="/connect"> Connect </Link>
        </li> */}
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link logout" id="loginButton" to="/login" id="logout" onClick = {logout} >Logout</Link>
        </li>
      </>
    }
    else {
        return <>
        <li className={`nav-item ${mobileMenu}`} ref={aboutRef}>
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className={`nav-item ${mobileMenu}`} ref={homeRef}>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link" to="/" id="centerImg"><img className="iconImg" src ={img} alt="centerImg"></img></Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link" to="/dashboard/profile">Explore</Link>
        </li>
        <li className={`nav-item ${mobileMenu}`} ref={loginRef}>
            <Link className="nav-link"  to="/login" id="loginButton" >Login</Link>
        </li>
      </>
    }
}
  return (
    //  Navigation bar
    <div className = {`navbar ${mobileMenu}`}>
      <div className="container">
      <ul>
        {loggedIn()}

      </ul>
      {/* <p>Hi {displayName()}</p>
      <img src = {displayImg()} className="profileIcon"></img> */}
      <div id="centerImg1" onClick={switchMobile}><img className="iconImg" src ={img} alt="centerImg1"></img></div>
    </div></div>
    )
}
export default Navbar