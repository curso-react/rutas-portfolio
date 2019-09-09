import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';
import {projects as Projects} from './components/Projects';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/projects/:id' component={ProjectDetails} />
      </Switch>
    </div>
  );
}

export default App;
