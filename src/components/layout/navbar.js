import '../css/navbar.css'
import React, {ReactDOM} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import img from '../../images/icons/magicbook2.svg'
 const Navbar = () => {

  const { currentUser } = useAuth();
  const { logout } = useAuth();

  function navlog(){
    if (currentUser !== null){
          return <>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">Explore</Link>
            </li>
            <li class = "nav-item">
              <Link class="nav-link" to="/" id="centerImg"><img src ={img}></img></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"  to="/dashboard"> Dashboard </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"  to="/connect"> Connect </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link logout"  to="/login" id="loginButton" onClick = {logout} >Logout</Link>
            </li>
          </>
    }
    else {
        return <>
        <li class="nav-item">
          <Link class="nav-link active" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class = "nav-item">
          <Link class="nav-link" to="/" id="centerImg"><img src ={img}></img></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Explore</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link"  to="/login" id="loginButton" >Login</Link>
        </li>
        </>
    }
}
  return (
    //  Navigation bar
    <div class = "navbar">
      <ul class="navbarUl">
        {navlog()}
      </ul>
      <div id="centerImg1" ><img src ={img}></img></div>
    </div>
    )
}
export default Navbar