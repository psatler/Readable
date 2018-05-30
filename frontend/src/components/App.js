import React, { Component } from 'react';
import '../App.css';

import * as API from '../utils/api'
import PostForm from './PostForm';

class App extends Component {

  state = {
    data: [],
    
  }

  componentDidMount(){
    API.getAllCategories().then( (d) => {
        this.setState( { data: d} );
      });

    API.getPostsByCategory('redux').then( (d) => console.log('Test', d))
    API.getAllPosts().then( (d) => console.log('posts', d))
    
  }


  render() {
    console.log('data', this.state.data);

    return (
      <div className="App">
        Hello, World!
        
        <PostForm />
      </div>
    );
  }
}

export default App;
