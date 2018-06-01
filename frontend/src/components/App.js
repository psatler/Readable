import React, { Component } from 'react';
// import '../App.css';
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import PostForm from './PostForm';
import Posts from './Posts'



class App extends Component {


  render() {

    return (

      <Container >

        <Route exact path="/" render={ () => (
          <Posts />
        )}
        />

        <Route path="/new" render={() => (
          <PostForm />
        )}
        />

      </Container>
      
    );
  }
}



export default App;
