import React, { useRef, useState } from "react"
import { useAuth } from "../../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/login")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <section className= "Signup">
        <div className = "signup-container">
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <div id="password-confirm">
              <label>Password Confirmation</label>
              <input type="password" ref={passwordConfirmRef} required />
            </div>
            <button disabled={loading} className="w-100" type="submit" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </section>
    </>
  )
}