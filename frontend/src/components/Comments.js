import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Comment, Form, Icon, Label } from 'semantic-ui-react'
import { showTime } from '../utils/helpers'

import CommentForm from './CommentForm'

//redux
import { connect } from 'react-redux'
import { fetchCommentsFromPostThunk } from '../actions'

const CommentItem = (props) => {
    return (
        <span>
        {/* <Comment.Group > */}
            <Comment>
            {/* <Comment.Avatar as='a' src='/assets/images/avatar/small/joe.jpg' /> */}
            <Comment.Content>
                <Comment.Author>
                    {props.author} 
                    <Comment.Metadata>
                        {` ${showTime(props.timestamp)} `} 
                    </Comment.Metadata>
                </Comment.Author>
                
                {/* <Comment.Metadata>{` ${showTime(props.timestamp)} `} </Comment.Metadata> */}
                <Comment.Text>
                {props.body}
                </Comment.Text>
                
                <Comment.Actions>
                {/* <Comment.Action>{` ${showTime(props.timestamp)} `}</Comment.Action> */}
                <Comment.Action><Icon name='arrow up' onClick={()=> {}} /></Comment.Action>
                <Comment.Action>{props.voteScore}</Comment.Action>
                <Comment.Action><Icon name='arrow down' onClick={()=> {}} /></Comment.Action>
                <Comment.Action>Edit</Comment.Action>
                <Comment.Action>Delete</Comment.Action>
                
                </Comment.Actions>
            </Comment.Content>
            </Comment>
        
        </span>
        )
    }


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

                <Comment.Group >
                {comments.map( c => (
                    <CommentItem 
                        key={c.id}
                        author={c.author}
                        timestamp={c.timestamp}
                        body={c.body}
                        voteScore={c.voteScore}
                    />
                ))}
                </Comment.Group >
                
                <CommentForm parentId={postID} />
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