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
    // const navbarStyle = {
    // // background: "none",
    // background: "transparent",
    // color: "fffff",
    // /*text-transform: uppercase;*/
    // position: "fixed",
    // zIndex: 2,
    // minWidth: "100%",
    // minHeight: "70px",

    // "&:hover": {
    // transition: "all .5s ease",
    // background: "linear-gradient(to bottom, rgb(14, 6, 31), rgba(0, 0, 0, 0))",
    // }
    // }
    // const navbarulStyle = {
    // display: "flex",
    // justifyContent: "center",
    // listStyleType: "none",
    // padding: "30px 0 20px 0",
    // borderBottom: "solid",
    // borderWidth: "1px",
    // margin: "0 min(20%) 0 min(20%)",
    // }
    // const navitemStyle = {
    // padding: "0px 20px 0px 20px",
    // letterSpacing: "2px"
    // }
    // const navLinkStyle = {
    // textDecoration: "none",
    // color:"white",

    // "&:hover &:active" : {
    // borderBottom: "solid",
    // borderWidth: "1px",
    // paddingBottom: "5px",
    // letterSpacing: "5px",
    // }
    // }
    // return (
    //     // Navbar
    //     <div  style = {navbarStyle} ClassName = "navbar">
    //       <ul style = {navbarulStyle} ClassName="nav">
    //         <li style = {navitemStyle}ClassName="nav-item">
    //           <a style = {navLinkStyle} ClassName="nav-link active" href="/about">About</a>
    //         </li>
    //         <li style = {navitemStyle} ClassName="nav-item">
    //           <a style = {navLinkStyle} ClassName="nav-link" href="/Explore">Explore</a>
    //         </li>
    //         <li style = {navitemStyle} ClassName="nav-item">
    //           <a style = {navLinkStyle} ClassName="nav-link" href="/Login">Login</a>
    //         </li>
    //       </ul>
    //     </div>
    // )
}
export default navbar