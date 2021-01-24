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
      <div className="hold">
        <div className="container">
          <h4>Let It Burn</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="form-control">
              <input
                onChange={this.handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
              />
            </div>

            <div className="form-control">
              <input
                onChange={this.handleChange}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>

            <p class="text">
              Don't have an account? <a href="Register">Register</a>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
