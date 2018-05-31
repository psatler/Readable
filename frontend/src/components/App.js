import React, { Component } from 'react';
import '../App.css';

import PostForm from './PostForm';
import Posts from './Posts'



class App extends Component {


  render() {

    return (
      <div className="App">
        Hello, World!
        <Posts />
        <PostForm />
      </div>
    );
  }
}



export default App;
