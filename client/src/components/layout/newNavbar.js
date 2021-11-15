import './css/new-navbar.scss'
import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import img from '../../images/icons/magicbook2.svg'
import book1 from '../../images/Icon/cyclops.svg'

const Navbar = () => {
  const { currentUser, logout, displayImg, displayName} = useAuth();
  const {aboutRef, homeRef, loginRef} = useRef();
  const [mobileMenu, setMobileMenu] = useState("");
  const [navPath, setNavPath] = useState("");

  const switchMobile = () =>{
    setMobileMenu( mobileMenu === "" ? "active" : "" )
  }
  function loggedIn(){
    if (currentUser !== null){
      return <>
          <Link className="nav-items loginLogout" to="/login" id="logout" onClick = {logout} >Logout</Link>
      </>
    }
    else {
        return <>
          <Link className="nav-items loginLogout"  to="/login" >Login</Link>
      </>
    }
}
  return (
    //  Navigation bar
    <div className = {`mainNavbar ${mobileMenu}`}>
      <div className="navContainer">
        <div className="navbar_links">
            <img src={book1} className="svgIcon"/><h1> AI </h1>
            <Link className="nav-items" to="/about">About</Link>
            <Link className="nav-items" to="/">Home</Link>
            <Link className="nav-items"  to="/dashboard"> Dashboard </Link>
            {loggedIn()}
        </div>
      </div>
      <div id="centerImg1" onClick={switchMobile}><img className="iconImg" src ={img} alt="centerImg1"></img></div>
    </div>
    )
}
export default Navbar