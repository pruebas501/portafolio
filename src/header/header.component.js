import React from 'react';

import logo from '../images/kawa.png';
import { Link, withRouter } from 'react-router-dom';
import './header.module.css';

function headerComponent (props) {
    
    return (
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" onClick={
                ()=>{props.history.push("/")}}></img>
          </div>
          <nav>
            <ul>
              <li><Link to="/about">Acerca</Link></li>
              <li><Link to="/curriculum">CV</Link></li>
              <li><Link to="/proyects">Proyectos</Link></li>
              <li><Link to="/partners">Compañeros</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </nav>
        </div>
    );
}

export default withRouter(headerComponent);