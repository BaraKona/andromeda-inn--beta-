import React, { useRef, useState } from "react"
import { useAuth } from "../../Contexts/AuthContext"
import { Link } from "react-router-dom"
import '../css/login.css'

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <section className = "forgotPassword">
        <div className = "forgotContainer">
          <h1 className="text-center">Password Reset</h1>
          <div>
          <p className = "errorMsg">{error}</p>
          <p className = "errorMsg">{message}</p>
            <div id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <button disabled={loading} className="w-100" type="submit" onClick={handleSubmit}>
              Reset Password
            </button>
          </div>
          <div className = "bottomContainer">
            <div className="w-100 text-center mt-3">
              <Link to="/login"><span>Login</span></Link>
            </div>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup"><span>Sign Up</span></Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}