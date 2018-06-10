import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Item, Button, Dimmer, Loader}from 'semantic-ui-react'
// import { showTime } from '../utils/helpers'
import { PostItem } from './PostItem'

/**
 * Redux
 */
import { connect } from 'react-redux'
import { fetchAllPosts, sortItensAction } from '../actions' //importing an action

class Posts extends Component {
    componentDidMount(){
        const category = this.props.match.params.category;
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
                />
                )
            )
        )
    }

    render() {
        console.log('posts', this.props.posts)
        const { loading } = this.props;

        if(loading){
            // return <h1>Loading...</h1>
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
               
                {/* <Button color='black' floated='left' onClick={() => this.props.sortItensAction('byPoints')} > Sort </Button> */}

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
    posts: state.postReducer.posts,
    loading: state.postReducer.loading
  })
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        sortItensAction: (option) => dispatch(sortItensAction(option)),
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Posts);