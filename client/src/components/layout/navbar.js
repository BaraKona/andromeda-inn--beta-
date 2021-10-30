import './css/navbar.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import img from '../../images/icons/magicbook2.svg'


const Navbar = () => {
  const { currentUser, logout, displayImg, displayName} = useAuth();
  const [mobileMenu, setMobileMenu] = useState("");

  const switchMobile = () =>{
    setMobileMenu( mobileMenu === "" ? "active" : "" )
  }
  function loggedIn(){
    if (currentUser !== null){
      return <>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link" to="/"> Explore</Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link" to="/" id="centerImg"><img className="iconImg" src ={img} alt="centerImg"></img></Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link"  to="/dashboard/profile"> Dashboard </Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link"  to="/connect"> Connect </Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link logout"  to="/login" id="logout" onClick = {logout} >Logout</Link>
        </li>
      </>
    }
    else {
        return <>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link" to="/" id="centerImg"><img className="iconImg" src ={img} alt="centerImg"></img></Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
          <Link className="nav-link" to="/">Explore</Link>
        </li>
        <li className={`nav-item ${mobileMenu}`}>
            <Link className="nav-link"  to="/login" id="loginButton" >Login</Link>
        </li>
      </>
    }
}
  return (
    //  Navigation bar
    <div className = {`navbar ${mobileMenu}`}>
      <ul>
        {loggedIn()}

      </ul>
      {/* <p>Hi {displayName()}</p>
      <img src = {displayImg()} className="profileIcon"></img> */}
      <div id="centerImg1" onClick={switchMobile}><img className="iconImg" src ={img} alt="centerImg1"></img></div>
    </div>
    )
}
export default Navbar