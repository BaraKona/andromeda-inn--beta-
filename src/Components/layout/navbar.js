import '../css/navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'

 const Navbar = () => {

  const { currentUser } = useAuth();
  const { logout } = useAuth()
  function navlog(){
    if (currentUser !== null){
          return <>
            <li class="nav-item">
              <Link class="nav-link"  to="/dashboard"> Dashboard </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"  to="/connect"> Connect </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link logout"  to="/login" onClick = {logout} >Logout</Link>
            </li>
          </>
    }
    else {
        return <>
          <li class="nav-item">
            <Link class="nav-link"  to="/login" >Login</Link>
          </li>
        </>
    }
}
  return (
    //  Navigation bar
    <div class = "navbar">
      <ul class="nav">
        <li class="nav-item">
          <Link class="nav-link active" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Explore</Link>
        </li>
        {navlog()}
      </ul>
    </div>
    )
}
export default Navbar