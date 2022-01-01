import './css/new-navbar.scss'
import React, {useState} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import {cyclops1, cyclops3, cyclops6} from '../../images/Icon/index'

const Navbar = () => {
  const { currentUser, logout, displayImg, displayName} = useAuth();
  const [mobileMenu, setMobileMenu] = useState("");


  const location = useLocation();//assigning location variable
  const { pathname } = location;//destructuring pathname from location
  const splitLocation = pathname.split("/");//Javascript split method to get the name of the path in array

  const switchMobile = () =>{
    setMobileMenu( mobileMenu === "" ? "active" : "" )
  }

  //Shows login button or logout depending on user
  function loggedIn(){
    if (currentUser !== null){
      return <><Link style={{marginLeft:'auto'}} className={`nav-items ${mobileMenu} loginLogout`} to="/login" id="logout" onClick = {logout} >Logout</Link></>
    }
    else {
        return <><Link style={{marginLeft:'auto'}} className={`nav-items ${mobileMenu} loginLogout`}  to="/login" >Login</Link></>
    }
  }

  //Determines what Icons to show depending on view
  function icon (){
    if (splitLocation[1] === 'about'){return <> <img src={cyclops3} className="svgIcon"/><h2 id="title" style={{color:"rgb(233,227,209)"}}> AI </h2></>}
    else if(splitLocation[1] === 'inn'){return <> <img src={cyclops6} className="svgIcon"/><h2 id="title" style={{color:"black"}}> AI </h2></>}

    else{return <> <img src={cyclops1} className="svgIcon"/><h2 id="title" style={{color:"rgb(233,227,209)"}}> AI </h2></>}
  }
  function isDashboard () {
    if (splitLocation[1] === 'inn'){
      return <>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/about" style={{marginLeft: '20px'}}>About</NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/">Home</NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/inn" style={{marginLeft:'auto'}}> Hub </NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/inn/discover"> Discover </NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/inn/projects"> Projects </NavLink>
        {/* <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/inn/create-post"> Posts </NavLink> */}
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} to="/inn/profile"> Profile </NavLink>
      </>
    }
    else {
      return <>
        <NavLink style={{marginLeft:'auto'}} activeClassName="navActive" className={`nav-items ${mobileMenu}`} to="/about">About</NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu}`} exact to="/">Home</NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu}`}  to="/inn"> Hub </NavLink>
      </>
    }
  }
  return (
    //  Navigation bar
    <div className = {`mainNavbar ${mobileMenu}`}>
      <div className="navContainer">
        <div className="navbar_links">
            {icon()}
            {isDashboard()}
            {loggedIn()}
        </div>
      </div>
      <div id="centerImg1" onClick={switchMobile}><img className="iconImg" src ={cyclops3} alt="centerImg1"></img></div>
    </div>
    )
}
export default Navbar