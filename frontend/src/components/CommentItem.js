import React, { Component } from 'react'
import { Comment, Form, Icon } from 'semantic-ui-react'
import { showTime } from '../utils/helpers'
import PropTypes from 'prop-types'

import marked from 'marked'; //markdown

//redux
import {connect} from 'react-redux';
import { voteOnCommentThunk, editCommentThunk, deleteCommentThunk } from '../actions'

class CommentItem extends Component {

    state = {
        editing: false,
        body: this.props.body,
    }

    //methods to edit comment
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleSubmit = () => {
        const commentId = this.props.id;
        const newTimestamp = Date.now();
        const newBody = this.state.body;

        this.props.editCommentThunk(commentId, newTimestamp, newBody)

        this.setState({
            editing: false,
            body: this.state.body,
        });
        
        // tell user that comment was updated
    }

    render() {
        const {id, author, timestamp, body, voteScore} = this.props;

        //https://stackoverflow.com/questions/34686523/using-marked-in-react
        const rawMarkup = marked(body, {sanitize: true});

        //show textarea depending on the comment is being edited or not
        const editComment = this.state.editing ? (<Form onSubmit={this.handleSubmit}>
                <Form.TextArea required  name='body' value={this.state.body} 
                   onChange={this.handleChange} />

                <Form.Button content='Update' labelPosition='left' icon='edit' primary />
            </Form>) : (<Comment.Text>
                <div dangerouslySetInnerHTML={{ __html: rawMarkup }} />
                {/* {body} */}
                </Comment.Text>)

        return (

            <Comment>
            {/* <Comment.Avatar as='a' src='/assets/images/avatar/small/joe.jpg' /> */}
            <Comment.Content>
                <Comment.Author>
                    {author} 
                    <Comment.Metadata>
                        {` ${showTime(timestamp)} `} 
                    </Comment.Metadata>
                </Comment.Author>
                
                
                {/*show textarea depending on the comment is being edited or not*/}
                {editComment}



                
                <Comment.Actions>
                    {/* <Comment.Action>{` ${showTime(props.timestamp)} `}</Comment.Action> */}
                    <Comment.Action>
                        <Icon name='arrow up' 
                            className="commentVoteUp"
                            onClick={()=> {this.props.voteOnCommentThunk(id,"upVote")}} 
                        />
                    </Comment.Action>
                    <Comment.Action>{voteScore}</Comment.Action>
                    <Comment.Action>
                        <Icon name='arrow down' 
                            className="commentVoteDown"
                            onClick={()=> {this.props.voteOnCommentThunk(id,"downVote")}} 
                        />
                    </Comment.Action>
                    <Comment.Action 
                        className="commentEdit"
                        onClick={() => {this.setState( {editing: true} )}}>Edit</Comment.Action>
                    
                    <Comment.Action 
                        className="commentDelete"
                        onClick={ () => {this.props.deleteCommentThunk(id)}}
                    >
                        Delete
                    </Comment.Action>
                
                </Comment.Actions>
            </Comment.Content>
            </Comment>

        )
    }
}


CommentItem.propTypes = {
    id: PropTypes.string.isRequired, 
    author: PropTypes.string.isRequired, 
    timestamp: PropTypes.number.isRequired, 
    body: PropTypes.string.isRequired, 
    voteScore: PropTypes.number.isRequired,
    voteOnCommentThunk: PropTypes.func.isRequired,
    editCommentThunk: PropTypes.func.isRequired,
    deleteCommentThunk: PropTypes.func.isRequired,
}


const mapDispatchToPros = (dispatch) => {
    return {
        editCommentThunk: (commentId, timestamp, body) => dispatch(editCommentThunk(commentId, timestamp, body)),
        voteOnCommentThunk: (commentId, option) => dispatch(voteOnCommentThunk(commentId, option)),
        deleteCommentThunk: (commentId) => dispatch(deleteCommentThunk(commentId)),
    }
}

export default connect(null, mapDispatchToPros)(CommentItem);

