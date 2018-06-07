import React, { Component } from 'react';
// import '../App.css';
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import PostForm from './PostForm';
import Posts from './Posts'
import PostDetail from './PostDetail'
import PostEdit from './PostEdit';

//Using URL parameters with React Router, by Tyler McGinnis: https://www.youtube.com/watch?v=CdBzemiFCfM


class App extends Component {


  render() {

    return (

      <Container >

        {/* <Route exact path="/" render={ () => (<Posts />)} /> */}
        {/* <Route path="/new" render={() => (<PostForm />)} /> */}
        
        <Route exact path="/" component={Posts} />
        <Route path="/new" component={PostForm} />
        <Route exact path="/:category/:id" component={PostDetail} />
        <Route path="/:category/:id/edit" component={PostEdit} />

      </Container>
      
    );
  }
}



export default App;
