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
}

 class App extends Component {
  render() {
    return (
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
          <li>
            <NavLink to="/Projekte/Foto" exact activeStyle={
              { color:'green' }
            }>Projekt Foto</NavLink>
          </li>
          <li>
            <NavLink to="/Projekte/Design2" exact activeStyle={
              { color:'green' }
            }>Projekt Design2</NavLink>
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
        </div>
      </Router>
    );
  }
}

export default App;
