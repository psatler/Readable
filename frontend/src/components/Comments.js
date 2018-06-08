import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Comment, Form, Icon, Label } from 'semantic-ui-react'
import { showTime } from '../utils/helpers'

import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

//redux
import { connect } from 'react-redux'
import { fetchCommentsFromPostThunk } from '../actions'


class Comments extends Component {
    

    componentDidMount(){
        // const id = this.props.match.params.id;
        const id = this.props.postID; //here the postID comes from the parent component 
        this.props.fetchCommentsFromPostThunk(id);
        // console.log('id',this.props.match);
    }

    

    render() {
        const {comments} = this.props;
        // console.log('comments',comments)
        const { postID } = this.props;

        return (        
            <span>
                <h3>{comments.length} Comments </h3>

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
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCommentsFromPostThunk: (id) => dispatch(fetchCommentsFromPostThunk(id))
    }
}

const mapStateToProps = (state) => ({
    comments: state.commentReducer.comments,

})



export default connect(mapStateToProps, mapDispatchToProps)(Comments);