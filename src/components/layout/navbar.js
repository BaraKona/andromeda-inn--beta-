import '../css/navbar.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import img from '../../images/icons/magicbook2.svg'


const Navbar = () => {
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const [mobileMenu, setMobileMenu] = useState("");

  const switchMobile = () =>{
    setMobileMenu( mobileMenu === "" ? "active" : "" )
  }
  function navlog(){
    if (currentUser !== null){
          return <>
            <li className={`nav-item ${mobileMenu}`}>
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className={`nav-item ${mobileMenu}`}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={`nav-item ${mobileMenu}`}>
              <Link className="nav-link" to="/">Explore</Link>
            </li>
            <li className={`nav-item ${mobileMenu}`}>
              <Link className="nav-link" to="/" id="centerImg"><img src ={img} alt="centerImg"></img></Link>
            </li>
            <li className={`nav-item ${mobileMenu}`}>
              <Link className="nav-link"  to="/dashboard"> Dashboard </Link>
            </li>
            <li className={`nav-item ${mobileMenu}`}>
              <Link className="nav-link"  to="/connect"> Connect </Link>
            </li>
            <li className={`nav-item ${mobileMenu}`}>
              <Link className="nav-link logout"  to="/login" id="loginButton" onClick = {logout} >Logout</Link>
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
          <Link className="nav-link" to="/" id="centerImg"><img src ={img} alt="centerImg"></img></Link>
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
        {navlog()}
      </ul>
      <div id="centerImg1" onClick={switchMobile}><img  src ={img} alt="centerImg1"></img></div>
    </div>
    )
}
export default Navbar