import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="ded-logo me-4" href="#">Ded Monkes</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Announcements <span class="material-icons">lock</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Community <span class="material-icons">lock</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dedabase <span class="material-icons">lock</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Markets <span class="material-icons">lock</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Roadmap <span class="material-icons">lock</span></a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-primary" type="submit">Connect Wallet <span class="material-icons">lock</span></button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
