import React, { useState, useEffect} from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory, Link } from "react-router-dom"
import img from '../images/icons/magicbook2.svg'
import wizard from '../images/icons/wizard.svg'
import Profile from '../components/dashboard/profile'
import PostForm from '../components/dashboard/postForm'
import '../components/css/dashboard.css'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout, displayImg, displayName } = useAuth()
  const history = useHistory()

  return (
    <>
      <div>
        {console.log(currentUser)}
        <div className = "topbar">
          <div className = "topbarContainer">
            <div className= "sidebarIcon"><Link to="/"><img src={img} className="iconImg"/></Link></div>
            <div className = "topUser"> Hi {displayName()}</div>
            <div><img src={displayImg()} className="profileIcon"/></div>
          </div>
        </div>
        <div className = "sidebar">
          <div className = "sidebarContainer">
            <div className= "sidebarList">
              <img src={wizard} className="iconImg"></img>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="dashboardContainer">
            <Profile/>
            <PostForm/>
          </div>
        </div>
      </div>
    </>
  )
}