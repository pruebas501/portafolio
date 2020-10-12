import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import star from './images/star.svg';
import HeaderComponent from './header/header.component';

import Contact from './contact/contact.component.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent />
        <img src={star} className="star1"/>
        <img src={star} className="star2"/>
        <img src={star} className="star3"/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/curriculum">
            <Curriculum />
          </Route>
          <Route path="/proyects">
            <Proyects />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
          <div className="sidebar">
          <div className="sidemenu">
            <ul>
              <li><a href="">Acerca</a></li>
              <li><a href="">CV</a></li>
              <li><a href="">Proyectos</a></li>
              <li><a href="">Contacto</a></li>
            </ul>
          </div>
        </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function About() {
  return <h2>About</h2>
}
function Curriculum() {
  return <h2>Curriculum</h2>
}
function Proyects() {
  return <h2>Proyects</h2>
}
function Partners() {
  return <h2>Partners</h2>
}

export default App;
