import React, { Component } from 'react'
import UserModel from '../models/user'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    UserModel.login(this.state)
      .then((data) => {
        console.log(data)
        // TODO: FIX IT
        if (!data.user) {
          return false
        }
        // storeUser is defined in the app component and passed to Login
        this.props.storeUser(data.user)
        // redirect the user to their profile
        this.props.history.push('/')
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="login">
        <h4>Let it all out</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              id="email"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              id="password"
              name="password"
              value={this.state.password}
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <a class="register-link" href="register">
          <p className="regP">Register</p>
        </a>
      </div>
    )
  }
}

export default Login
