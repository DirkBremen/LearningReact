import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  //define the initial state within the constructor
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Busienss website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'E-Commerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
