import React from 'react'
//import PropTypes from 'prop-types'
import {Link, useLocation} from 'react-router-dom'

const Navbar=()=> {
  
  const location = useLocation()
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link className="navbar-brand light appname" to="/">NewsLaundry</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{marginLeft:"auto"}}>
        
        <li className="nav-item mx-2"><Link className={`nav-link bold  ${location.pathname==="/business"? "active" :""}`} aria-current="page" to="/business">Business</Link></li>
        <li className="nav-item mx-2"><Link className={`nav-link bold  ${location.pathname==="/entertainment"? "active" :""}`} aria-current="page" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item mx-2"><Link className={`nav-link bold  ${location.pathname==="/health"? "active" :""}`} aria-current="page" to="/health">Health</Link></li>
        <li className="nav-item mx-2"><Link className={`nav-link bold  ${location.pathname==="/general"? "active" :""}`} aria-current="page" to="/general">General</Link></li>
        <li className="nav-item mx-2"><Link className={`nav-link bold  ${location.pathname==="/science"? "active" :""}`} aria-current="page" to="/science">Science</Link></li>
        <li className="nav-item mx-2"><Link className={`nav-link bold  ${location.pathname==="/sports"? "active" :""}`} aria-current="page" to="/sports">Sports</Link></li>
        <li className="nav-item mx-2"><Link className={`nav-link bold  ${location.pathname==="/technology"? "active" :""}`} aria-current="page" to="/technology">Technology</Link></li>
        
    </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  
}

export default Navbar

