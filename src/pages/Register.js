import React, { useState } from 'react'
import UserModel from '../models/user'

const Register = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleFirstName = e => {
    setFirstName(e.target.value)
  }  
  const handleLastName = e => {
    setLastName(e.target.value)
  }  
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (password === confirmPassword) {
      UserModel.create({ firstName, lastName, email, password })
        .then(data => {
          console.log('Successful register', data)
          // redirect to /login
          props.history.push('/profile')
        })
    }
  }

  return (
    <div className="RegDiv">
    <h4 className="registerP">Want to send a letter to your boss? An ex? A colleague? 
    Scared that will get you in trouble?
    Write it all out here..and then burn it. </h4>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input className="RegInputBox"
            onChange={ handleFirstName } 
            value={ firstName }
            type="text" 
            id="firstName" 
            name="firstName" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input className="RegInputBox"
            onChange={ handleLastName } 
            value={ lastName }
            type="text" 
            id="lastName" 
            name="lastName" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email:</label>
          <input className="RegInputBox"
            onChange={ handleEmail } 
            value={ email } 
            type="email" 
            id="email" 
            name="email" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password:</label>
          <input className="RegInputBox"
            onChange={ handlePassword } 
            value={ password } 
            type="password" 
            id="password" 
            name="password" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input className="RegInputBox"
            onChange={ handleConfirmPassword } 
            value={ confirmPassword } 
            type="password" 
            id="confirm-password" 
            name="confirm-password" 
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register