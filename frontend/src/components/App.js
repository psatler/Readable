import React, { Component } from 'react';
// import '../App.css';

import { Container } from 'semantic-ui-react'
import PostForm from './PostForm';
import Posts from './Posts'



class App extends Component {


  render() {

    return (
      // <div className="App">
      <Container >
        <Posts />
        <PostForm />  
      </Container>
      
    );
  }
}



export default App;
