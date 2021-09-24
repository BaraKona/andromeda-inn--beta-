import './css/navbar.css'
import { Link } from 'react-router-dom'

 const navbar = ({handleLogOut, hasAccount, setHasAccount, user, setUser, CurrentUser}) => {

  function loginLogout(){
    const empty = ''
    if (user == ''){
      return<li class="nav-item">
      <Link class="nav-link" to="/signup">Login</Link>
      </li>
    }else {
      return<li class="nav-item">
      <Link class="nav-link" exact to="/"  onClick={() => {setUser(user == empty)}, handleLogOut}>Log Out</Link>
    </li>
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
          <Link class="nav-link" to="/explore">Explore</Link>
        </li>
          {loginLogout()}
      </ul>
    </div>
    )
}
export default navbar