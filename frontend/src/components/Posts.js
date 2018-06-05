import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Item, Button }from 'semantic-ui-react'
// import { showTime } from '../utils/helpers'
import { PostItem } from './PostItem'

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
                // <ItemPost key={post.id} props={post} />
                <PostItem key={post.id} 
                    id={post.id}
                    category={post.category}
                    title={post.title}
                    author={post.author}
                    timestamp={post.timestamp}
                    voteScore={post.voteScore}
                    commentCount={post.commentCount}
                    // body={post.body}
                
                // props={post} isDetail={false} 
                />
                )
            )
        )
    }

    render() {
        console.log('posts', this.props.posts)
        return (
            <div>
                <Link to="/new" > 
                    <Button color='black' floated='right'> Create New Post</Button>
                </Link>
                <Item.Group divided >
                    {this.displayPosts()}
                </Item.Group>
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