import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { ReactComponent as Icon} from './targetx-logo-outl.svg';
import {Home}  from './components/Home';
import {Design}  from './components/Design';
import {Projekte}  from './components/Projekte';
import {Kooperationen}  from './components/Kooperationen';
import {Kontakt}  from './components/Kontakt';
import {Felix1}  from './components/Felix1';
import {HistMuseumBremerhaven}  from './components/HistMuseumBremerhaven';
import {HuBerlin}  from './components/HuBerlin';
import {Passus}  from './components/Passus';


 class App extends Component {
  render() {
    return (

  <Router>
  <div className="App" >
        <header  id="header">
            <div className="logo-container" className="logo">
                <Icon />
            </div>
            <div id="button1" className="menu-icon">
              <span className="menu-format">Menu on</span>
            </div>
        <nav>
        <div id="menu">
        <div id="navwrap" >

          <ul className="dropdown">
          <li>
            <NavLink to="/" exact activeStyle={
              { color:'#ff3300' }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/design" exact activeStyle={
              { color:'#ff3300' }
            }>Design</NavLink>
          </li>
          <li  className = "dropdown-menu"  >
            <NavLink to="/projekte-gesamt" exact activeStyle={
              { color:'#ff3300' }
            }>Projekte</NavLink>

          <ul className="sub-menu">
            <li>
              <NavLink to="/projekte/felix1" exact activeStyle={
                { color:'#ff3300' }
              }>• Felix1</NavLink>
            </li>
            <li>
              <NavLink to="/projekte/histmuseumbremerhaven" exact activeStyle={
                { color:'#ff3300' }
              }>• Hist. Museum Bremerhaven</NavLink>
            </li>
            <li>
              <NavLink to="/projekte/huberlin" exact activeStyle={
                { color:'#ff3300' }
              }>• Humboldt Uni Berlin</NavLink>
            </li>
            <li>
              <NavLink to="/projekte/passus" exact activeStyle={
                { color:'#ff3300' }
              }>• Passus</NavLink>
            </li>
          </ul>
          </li>
          <li>
            <NavLink to="kooperationen" exact activeStyle={
              { color:'#ff3300' }
            }>Kooperationen</NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" exact activeStyle={
              { color:'#ff3300' }
            }>Kontakt / Datenschutz</NavLink>
          </li>
          </ul>


        </div>
        </div>
        </nav>
        </header>

        <Route path="/" exact strict  component={Home} />
        <Route path="/design"   component={Design} />
        <Route path="/projekte-gesamt"   component={Projekte} />
          <Route path="/projekte/felix1"   component={Felix1} />
          <Route path="/projekte/histmuseumbremerhaven"   component={HistMuseumBremerhaven} />
       <Route path="/projekte/huberlin"   component={HuBerlin} />
       <Route path="/projekte/passus"   component={Passus} />
        <Route path="/kooperationen"   component={Kooperationen} />
        <Route path="/kontakt"   component={Kontakt} />
       </div>
      </Router>

    );
  }
}

export default App;
