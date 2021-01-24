import React, { useState } from 'react'
import UserModel from '../models/user'

const Register = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password === confirmPassword) {
      UserModel.create({ firstName, lastName, email, password }).then(
        (data) => {
          console.log('Successful register', data)
          // redirect to /login
          props.history.push('/profile')
        }
      )
    }
  }

  return (
    <div className="hold">
      <div className="container">
        <h4>Register</h4>
        <form onSubmit={handleSubmit} className="reg-form">
          <div className="form-control">
            <input
              onChange={handleFirstName}
              value={firstName}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-control">
            <input
              onChange={handleLastName}
              value={lastName}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-control">
            <input
              onChange={handleEmail}
              value={email}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-control">
            <input
              onChange={handlePassword}
              value={password}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-control">
            <input
              onChange={handleConfirmPassword}
              value={confirmPassword}
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="reg-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
