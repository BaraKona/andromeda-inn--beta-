import React, { useState} from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, Link } from "react-router-dom"
import img from '../../images/icons/magicbook2.svg'
import card from '../../images/icons/cards.svg'
import wizard from '../../images/icons/wizard.svg'
import './css/dashboard.css'

export default function Dashboard() {
  const { currentUser, logout, displayImg, displayName } = useAuth()

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
            <Link to="/dashboard/profile"><img src={wizard} className="iconImg"></img></Link>
            <Link to="/dashboard/create-post"><img src={card} className="iconImg"></img></Link>
            </div>
          </div>
        </div>
        {/* <div className="dashboard">
          <div className="dashboardContainer">
            <Profile/>
            <PostForm/>
          </div>
        </div> */}
      </div>
    </>
  )
}