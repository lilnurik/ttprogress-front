import React, { useState } from "react"
import logo from '../../../assets/logo.png'
import { Link } from "react-router-dom"
import "./header.css"
import { useTranslation } from "react-i18next"


const Head = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  };

  const [click2, setClick] = React.useState(false);

  const handleClick = () => setClick(!click2);
  const Close = () => setClick(false);

  return (
    <>
      <section className='head' style={{backgroundColor: '#1C2120'}}>
        <div className='container flexSB'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>

         
      {/* <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <button onClick={() => changeLanguage("ru")}>ru</button>
              <button onClick={() => changeLanguage("en")}>en</button>
              <button onClick={() => changeLanguage("uz")}>uz</button>
            </li>
          </ul>
         
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
      <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div> */}



<div>
     <div className={click2 ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          
          <ul className={click2 ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click2 ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={click2 ? handleClick : null}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click2 ? handleClick : null}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click2 ? handleClick : null}
              >
                Contact
              </Link>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click2 ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>



        </div>
      </section>

    </>
  )
}

export default Head
