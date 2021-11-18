import React, { useState} from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, Link } from "react-router-dom"
import img from '../../images/Icon/cyclops_8.svg'
import card from '../../images/icons/cards.svg'
import wizard from '../../images/icons/wizard.svg'
import genie from '../../images/icons/genieLamp.svg'
import mirror from '../../images/icons/mirror.svg'
import './css/dashboardFrame.scss'

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
              <Link to="/dashboard"><img src={genie} className="iconImg"></img><p> Hub </p></Link>
              <Link to="/dashboard/create-post"><img src={mirror} className="iconImg"></img><p> Friends</p></Link>
              <Link to="/dashboard/create-post"><img src={card} className="iconImg"></img><p> Your Posts</p></Link>
              <span><Link to="/dashboard/profile"><img src={wizard} className="iconImg"></img><p> Profile </p></Link></span>
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