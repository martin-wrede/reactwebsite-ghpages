import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const Design= () => (
  <p><h2>Design </h2>Hier ist Text</p>
);
const Projekte= () => (
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
      <div>
      <Router>
        <div className="App">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              { color:'green' }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Design" exact activeStyle={
              { color:'green' }
            }>Design</NavLink>
          </li>
          <li>
            <NavLink to="/Projekte" exact activeStyle={
              { color:'green' }
            }>Projekte</NavLink>
          </li>
          <ul>
            <li>
              <NavLink to="/Projekte/felix1" exact activeStyle={
                { color:'green' }
              }>Felix1</NavLink>
            </li>
            <li>
              <NavLink to="/Projekte/hist-museum-Bremerhaven" exact activeStyle={
                { color:'green' }
              }>Hist. Museum Bremerhaven</NavLink>
            </li>
            <li>
              <NavLink to="/Projekte/hu-berlin" exact activeStyle={
                { color:'green' }
              }>Humboldt Uni Berlin</NavLink>
            </li>
            <li>
              <NavLink to="/Projekte/passus" exact activeStyle={
                { color:'green' }
              }>Passus</NavLink>
            </li>
          </ul>
          <li>
            <NavLink to="/Kooperationen" exact activeStyle={
              { color:'green' }
            }>Kooperationen</NavLink>
          </li>
          <li>
            <NavLink to="/Kontakt" exact activeStyle={
              { color:'green' }
            }>Kontakt/Datenschutz</NavLink>
          </li>
          </ul>

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
      Text
      </div>
    );
  }
}

export default App;
