import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Item, Button }from 'semantic-ui-react'
import { PostItem } from './PostItem'

/**
 * Redux
 */
import { connect } from 'react-redux'
import { fetchPostsByCategory, sortItensAction } from '../actions'



class PostsByCategory extends Component {

    componentDidMount(){
        const category = this.props.match.params.category; //getting the :category name
        this.props.fetchPostsByCategory(category);
        
    }

    componentWillReceiveProps(nextProps) {
        const oldCategory = this.props.match.params.category;
        const newCategory = nextProps.match.params.category;
        if(oldCategory !== newCategory) {
            this.props.fetchPostsByCategory(newCategory);
        }

    }
    
    displayPosts = () => {
        const postsByCategory = this.props.postsByCategory;
        return (
            postsByCategory.map( post => ( 
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
        // console.log('posts', this.props.postsByCategory)
        const category = this.props.match.params.category;
        const { loading } = this.props;

        if(loading){
            return <h1>Loading posts from {category} category</h1>
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

                {/* <Button color='black' floated='left' onClick={() => this.props.sortItensAction('byPoints')}> Sort </Button> */}

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


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostsByCategory: (category) => dispatch(fetchPostsByCategory(category)),
        sortItensAction: (option) => dispatch(sortItensAction(option)),
    }
}

const mapStateToProps = (state) => {
    return {
        // postsByCategory: state.categoryReducer.postsByCategory,
        postsByCategory: state.postReducer.posts,
        loading: state.postReducer.loading,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsByCategory);

