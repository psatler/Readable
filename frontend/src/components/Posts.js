import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Item, Button, Dimmer, Loader}from 'semantic-ui-react'
import { PostItem } from './PostItem'

/**
 * Redux
 */
import { connect } from 'react-redux'
import { fetchAllPosts, sortItensAction } from '../actions' //importing an action

class Posts extends Component {
    componentDidMount(){
        this.props.fetchAllPosts();
    }

    displayPosts = () => {
        const posts = this.props.posts;
        if(posts.length === 0){
            return (
                <h5>There is no posts stored</h5>
            )
        }

        return (
            posts.map( post => ( 
                <PostItem key={post.id} 
                    id={post.id}
                    category={post.category}
                    title={post.title}
                    author={post.author}
                    timestamp={post.timestamp}
                    voteScore={post.voteScore}
                    commentCount={post.commentCount}
                    // body={post.body}
                />
                )
            )
        )
    }

    render() {
        // console.log('posts', this.props.posts)
        const { loading } = this.props;

        if(loading){
            return (
                <Dimmer active inverted>
                    <Loader size="large">Loading posts</Loader>
                </Dimmer>
            )
        }

        return (
            <div>
                Sort By: <br/>
                <Button.Group size="mini" >
                    <Button onClick={() => this.props.sortItensAction('byPoints')}> 
                        Score
                    </Button>
                    <Button.Or />
                    <Button positive onClick={() => this.props.sortItensAction('byDate')}>
                        Date
                    </Button>
                </Button.Group>
               
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


const mapStateToPros = (state) => ({
    posts: state.postReducer.posts,
    loading: state.postReducer.loading
  })
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        sortItensAction: (option) => dispatch(sortItensAction(option)),
    }
}

Posts.propTypes = {
    fetchAllPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired, //from state
    sortItensAction: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToPros, mapDispatchToProps)(Posts);