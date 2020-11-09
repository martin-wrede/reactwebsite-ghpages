import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { ReactComponent as Icon} from './targetx-logo-outl.svg';
import {Design}  from './components/Design';



const Projekte= () =>
 (
  <p><h2>Projekte </h2>Hier ist Text</p>
);

const Projekt = (params) => {
  return ( <h1> Welcome Projekt parameter{params.projektname} </h1>)
};

const Kooperationen= () => (
  <p><h2>Kooperationen</h2>Hier ist Text</p>
);
const Kontakt= () => (
  <p><h2>Kontakt/Impressum</h2>Hier ist Text</p>
);

 class App extends Component {
  render() {
    return (

  <Router>
  <div className="App" id="wrapperx">
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
            <NavLink to="/Design" exact activeStyle={
              { color:'#ff3300' }
            }>Design</NavLink>
          </li>
          <li  className = "dropdown-menu"  >
            <NavLink to="/Projekte" exact activeStyle={
              { color:'#ff3300' }
            }>Projekte</NavLink>

          <ul className="sub-menu">
            <li>
              <NavLink to="/Projekte/felix1" exact activeStyle={
                { color:'#ff3300' }
              }>• Felix1</NavLink>
            </li>
            <li>
              <NavLink to="/Projekte/hist-museum-bremerhaven" exact activeStyle={
                { color:'#ff3300' }
              }>• Hist. Museum Bremerhaven</NavLink>
            </li>
            <li>
              <NavLink to="/Projekte/hu-berlin" exact activeStyle={
                { color:'#ff3300' }
              }>• Humboldt Uni Berlin</NavLink>
            </li>
            <li>
              <NavLink to="/Projekte/passus" exact activeStyle={
                { color:'#ff3300' }
              }>• Passus</NavLink>
            </li>
          </ul>
          </li>
          <li>
            <NavLink to="/Kooperationen" exact activeStyle={
              { color:'#ff3300' }
            }>Kooperationen</NavLink>
          </li>
          <li>
            <NavLink to="/Kontakt" exact activeStyle={
              { color:'#ff3300' }
            }>Kontakt / Datenschutz</NavLink>
          </li>
          </ul>


        </div>
        </div>
        </nav>
        </header>

        <Route path="/" exact strict render={
          () => {
            return ( <h1>Welcome Home</h1>);
          }
        }/>
        <Route path="/Design"   component={Design} />
        <Route path="/Projekte"   component={Projekte} />
        <Route path="/Projekte/:projektname" exact strict render={({match})=>(
           ( <Projekt projektname={match.params.projektname}/>)
        )}/>
        <Route path="/Kooperationen"   component={Kooperationen} />
        <Route path="/Kontakt"   component={Kontakt} />
       </div>
      </Router>

    );
  }
}

export default App;
