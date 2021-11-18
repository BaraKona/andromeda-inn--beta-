import './css/new-navbar.scss'
import React, {useState, useEffect, useRef} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import img from '../../images/icons/magicbook2.svg'
import book1 from '../../images/Icon/cyclops_1.svg'
import book2 from '../../images/Icon/cyclops_3.svg'
import book3 from '../../images/Icon/cyclops_6.svg'

const Navbar = () => {
  const { currentUser, logout, displayImg, displayName} = useAuth();
  const {aboutRef, homeRef, loginRef} = useRef();
  const [mobileMenu, setMobileMenu] = useState("");
  const [dashboard, setDashboard] = useState("")
  const [navPath, setNavPath] = useState("");

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
    if (splitLocation[1] === 'new-about'){return <> <img src={book2} className="svgIcon"/><h2 id="title" style={{color:"rgb(180, 161, 152)"}}> AI </h2></>}

    else if(splitLocation[1] === 'dashboard'){return <> <img src={book3} className="svgIcon"/><h2 id="title"> AI </h2></>}

    else{return <> <img src={book1} className="svgIcon"/><h2 id="title"> AI </h2></>}
  }
  function isDashboard () {
    if (splitLocation[1] === 'dashboard'){
      return <>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/" style={{marginLeft: '20px'}}>Home</NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/new-about" >About</NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/dashboard" style={{marginLeft:'auto'}}> Hub </NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/dashboard/profile"> Profile </NavLink>
        {/* <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/"> Friends</NavLink> */}
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu} dark`} exact to="/dashboard/create-post"> Your Posts</NavLink>

      </>
    }
    else {
      return <>
        <NavLink style={{marginLeft:'auto'}} activeClassName="navActive" className={`nav-items ${mobileMenu}`} to="/new-about">About</NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu}`} exact to="/">Home</NavLink>
        <NavLink activeClassName="navActive" className={`nav-items ${mobileMenu}`}  to="/dashboard"> Dashboard </NavLink>
      </>
    }
  }
  console.log(splitLocation)
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
      <div id="centerImg1" onClick={switchMobile}><img className="iconImg" src ={book3} alt="centerImg1"></img></div>
    </div>
    )
}
export default Navbar