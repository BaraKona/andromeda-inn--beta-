import '../css/navbar.css'
import { Link } from 'react-router-dom'

 const navbar = () => {

  // function loginLogout(){
  //   const empty = ''
  //   if (if){
  //     return<li class="nav-item">
  //     <Link class="nav-link" to="/signup">Login</Link>
  //     </li>
  //   }else {
  //     return<li class="nav-item">
  //     <Link class="nav-link" exact to="/"  onClick={handleLogOut}>Log Out</Link>
  //   </li>
  //   }
  // }

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
          <Link class="nav-link" to="/explore">Explore</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/login" >Log in</Link>
        </li>
      </ul>
    </div>
    )
}
export default navbar