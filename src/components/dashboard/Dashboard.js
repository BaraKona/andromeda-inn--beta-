import React, { useState, useEffect} from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, Link } from "react-router-dom"
import img from '../../images/icons/magicbook2.svg'
import wizard from '../../images/icons/wizard.svg'
import '../css/dashboard.css'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  return (
    <>
      <div>
        <div className = "sidebar">
          <div className = "sidebarContainer">
            <div className= "sidebarIcon"><Link to="/"><img src={img} className="iconImg"></img></Link></div>
            <div className= "sidebarList"><img src={wizard} className="iconImg"></img></div>
          </div>
        </div>
        <div className="dashboard">
          <div className="dashboardContainer">
          </div>
        </div>
      </div>
    </>
  )
}