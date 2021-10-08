import React, { useState, useEffect} from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory} from "react-router-dom"
import '../css/dashboard.css'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div>
        <div className="dashboard">
          <div className="dashboardContainer">
            <h1> DASHBOARD in progress...</h1>
          </div>
          <p className = "errorMsg">{error}</p>
          {/* <strong>Email:</strong> {currentUser.email} */}
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link> */}
        </div>
      </div>
    </>
  )
}