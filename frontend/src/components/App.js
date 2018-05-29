import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import * as API from '../utils/api'

class App extends Component {

  state = {
    data: [],
    
  }

  componentDidMount(){
    API.getAllCategories().then( (d) => {
        this.setState( { data: d} );
      });

    API.getPostsByCategory('redux').then( (d) => console.log('Test', d))
  }


  render() {
    console.log('data', this.state.data);

    return (
      <div className="App">
        Hello, World!
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
