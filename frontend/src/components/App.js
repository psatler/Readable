import React, { Component } from 'react';
// import '../App.css';
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import PostForm from './PostForm';
import Posts from './Posts'
import PostDetail from './PostDetail'
import PostEdit from './PostEdit';
import PostsByCategory from './PostsByCategory'

import MenuApp from './Menu'

//Using URL parameters with React Router, by Tyler McGinnis: https://www.youtube.com/watch?v=CdBzemiFCfM


class App extends Component {


  render() {

    return (

      <Container >

        {/* <Route exact path="/" render={ () => (<Posts />)} /> */}
        {/* <Route path="/new" render={() => (<PostForm />)} /> */}

        <MenuApp />
        
        <Switch> {/*using switch to match only one option */}
          <Route exact path="/" component={Posts} />
          <Route exact path="/new" component={PostForm} />
          <Route exact path="/:category" component={PostsByCategory} />
          <Route exact path="/:category/:id" component={PostDetail} />
          <Route exact path="/:category/:id/edit" component={PostEdit} />
        </Switch>

      </Container>
      
    );
  }
}



export default App;
