import React from 'react'
import { Link, withRouter } from 'react-router-dom'
function Navbar (props: any) {
  return (
    <nav
      className={
        'navbar navbar-expand-sm ' +
        (props.theme === 'light'
          ? 'navbar-light bg-light'
          : 'navbar-dark bg-dark')
      }
      style={{ transition: 'all 0.25s linear' }}
    >
      <Link to="/" className="navbar-brand">
        Nigel Lee
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to="/experience"
              className={
                props.history.location.pathname === '/experience'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Experience <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={
                props.history.location.pathname === '/projects'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
