import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <a href="/">
        <img src="https://i.imgur.com/sQhfHuA.png" height="33" width="33" />
      </a>
      <div className="logo">
        <Link to={'/'}></Link>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <a href="/logout" onClick={props.logout}>
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
