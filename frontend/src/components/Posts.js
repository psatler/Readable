import React, { Component } from 'react'
import PropTypes from 'prop-types'
/**
 * Redux
 */
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions' //importing an action


class Posts extends Component {
    componentDidMount(){
        this.props.fetchAllPosts();
    }

    displayPosts = () => {
        const posts = this.props.posts;
        return (
            posts.map( post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.author}</p>
                </div>
                )
            )
        )
    }

    render() {
        console.log('posts', this.props.posts)
        return (
            
            <div>
                {this.displayPosts()}
            </div>
        )
    }
}


Posts.propTypes = {
    fetchAllPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired, //prop "declared" below
}

const mapStateToPros = (state) => ({
    posts: state.postReducer.posts
  })
  
  // const mapDispatchToProps = (dispatch)

export default connect(mapStateToPros, { fetchAllPosts })(Posts);