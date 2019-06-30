import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
class App extends Component {
  render() {
    return (
      <HashRouter basename="/portfolio">
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
