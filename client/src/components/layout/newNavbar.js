import './css/new-navbar.scss'
import React, {useState, useEffect, useRef} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import img from '../../images/icons/magicbook2.svg'
import book1 from '../../images/Icon/cyclops_1.svg'
import book2 from '../../images/Icon/cyclops_3.svg'
import book3 from '../../images/Icon/cyclops_7.svg'

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
      return <><Link className={`nav-items ${mobileMenu} loginLogout`} to="/login" id="logout" onClick = {logout} >Logout</Link></>
    }
    else {
        return <><Link className={`nav-items ${mobileMenu} loginLogout`}  to="/login" >Login</Link></>
    }
  }
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  function icon (){
    if (splitLocation[1] === 'new-about'){
      return <> <img src={book2} className="svgIcon"/><h2 id="title" style={{color:"white"}}> AI </h2></>
    }
    else{
      return <> <img src={book1} className="svgIcon"/><h2 id="title"> AI </h2></>
    }
  }
  console.log(splitLocation)
  return (
    //  Navigation bar
    <div className = {`mainNavbar ${mobileMenu}`}>
      <div className="navContainer">
        <div className="navbar_links">
            {icon()}
            <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu}`} to="/new-about">About</NavLink>
            <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu}`} exact to="/">Home</NavLink>
            <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu}`}  to="/dashboard"> Dashboard </NavLink>
            {loggedIn()}
        </div>
      </div>
      <div id="centerImg1" onClick={switchMobile}><img className="iconImg" src ={book3} alt="centerImg1"></img></div>
    </div>
    )
}
export default Navbar