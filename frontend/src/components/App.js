import React, { Component } from 'react';
import '../App.css';

// import * as API from '../utils/api'
import PostForm from './PostForm';

/**
 * Redux
 */
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions' //importing an action

class App extends Component {


  componentDidMount(){
    this.props.fetchAllPosts();
  }


  render() {
    // console.log('data', this.state.data);

    const posts = this.props.posts.map( post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.author}</p>
      </div>
    ))

    return (
      <div className="App">
        Hello, World!

        {posts}
        
        <PostForm />
      </div>
    );
  }
}


const mapStateToPros = (state) => ({
  posts: state.postReducer.posts
})

// const mapDispatchToProps = (dispatch)

export default connect(mapStateToPros, { fetchAllPosts })(App);
