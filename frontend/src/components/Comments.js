import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Comment, Dimmer, Loader } from 'semantic-ui-react'
// import { showTime } from '../utils/helpers'

import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

//redux
import { connect } from 'react-redux'
import { fetchCommentsFromPostThunk } from '../actions'


class Comments extends Component {
    

    componentDidMount(){
        const id = this.props.postID; //here the postID comes from the parent component 
        this.props.fetchCommentsFromPostThunk(id);
    }

    render() {
        const {comments, post, postID, loading} = this.props;
    
        if(loading){
            return (
                <span>
                    <h3 className="commentsCounter">{post.commentCount} Comments </h3>

                    <CommentForm parentId={postID} />
                    
                    <Dimmer active inverted>
                        <Loader size="small">Loading comments</Loader>
                    </Dimmer>
            
                </span>
            )
        }

        return (        
            <span>
                <h3 className="commentsCounter">{post.commentCount} Comments </h3>

                <CommentForm parentId={postID} />

                <Comment.Group >
                {comments.map( c => (
                    <CommentItem 
                        id={c.id}
                        key={c.id}
                        author={c.author}
                        timestamp={c.timestamp}
                        body={c.body}
                        voteScore={c.voteScore}
                    />
                ))}
                </Comment.Group >
            </span>     
            
        )
    }
}

Comments.propTypes = {
    postID: PropTypes.string.isRequired,
    fetchCommentsFromPostThunk: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired, //from state to props
    post: PropTypes.object.isRequired, //from state to props
    loading: PropTypes.bool.isRequired, //from state to props
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCommentsFromPostThunk: (id) => dispatch(fetchCommentsFromPostThunk(id))
    }
}

const mapStateToProps = (state) => ({
    comments: state.commentReducer.comments,
    post: state.postReducer.post,
    loading: state.commentReducer.loading,

})



export default connect(mapStateToProps, mapDispatchToProps)(Comments);