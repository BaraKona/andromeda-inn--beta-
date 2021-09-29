import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../css/login.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/Dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <section className ="login">
        <div className ="loginContainer">
          <h1 className="login-title">Log In</h1>
          <p className = "errorMsg">{error}</p>
          <div>
            <div id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <button disabled={loading} className="w-100" type="submit" onClick={handleSubmit}>
              Log In
            </button>
          </div>
          <div className = "bottomContainer">
            <div>
              <Link to="/forgot-password"><span>Forgot Password ?</span></Link>
            </div>
            <div>
              Need an account? <Link to="/signup"><span>Sign Up</span></Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}