import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
      <nav 
  className="navbar navbar-expand-lg"
  style={{
    backgroundColor: props.mode === 'dark' ? '#033159' : 'white'
  }}
>
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >{props.aboutText}</Link>
        </li>
       
      </ul>
      {/* <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">DarkMode</label>
</div>
    </div  >
  </div>
</nav>
  )
}
Navbar.propTypes={// these are the objects made to check the type of props passed to the component...if we pass a string to
  title: PropTypes.string.isRequired,// agr koi no daaloge title pe to error aaega
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps ={
  title:'Set Title here',
  aboutText:'About Text here'
};// these are the default props if we do not pass any props to the component then these default props will be used...
// error may occur if we do not pass any props to the component and we have not set default props...so it is a good practice to set default props for the component...