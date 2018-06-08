import React, { Component } from 'react'
import { Button, Comment, Form, Icon, Label } from 'semantic-ui-react'
import { showTime } from '../utils/helpers'
import PropTypes from 'prop-types'

//redux
import {connect} from 'react-redux';
import { voteOnCommentThunk } from '../actions'

class CommentItem extends Component {

    render() {
        const {id, author, timestamp, body, voteScore} = this.props;

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
                
                {/* <Comment.Metadata>{` ${showTime(props.timestamp)} `} </Comment.Metadata> */}
                <Comment.Text>
                {body}
                </Comment.Text>
                
                <Comment.Actions>
                {/* <Comment.Action>{` ${showTime(props.timestamp)} `}</Comment.Action> */}
                <Comment.Action>
                    <Icon name='arrow up' onClick={()=> {this.props.voteOnCommentThunk(id,"upVote")}} />
                </Comment.Action>
                <Comment.Action>{voteScore}</Comment.Action>
                <Comment.Action>
                    <Icon name='arrow down' onClick={()=> {this.props.voteOnCommentThunk(id,"downVote")}} />
                </Comment.Action>
                <Comment.Action>Edit</Comment.Action>
                <Comment.Action>Delete</Comment.Action>
                
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
}

// PostVote.propTypes = {
//     id: PropTypes.string.isRequired,
//     voteScore: PropTypes.number.isRequired,
// }

export default connect(null, {voteOnCommentThunk})(CommentItem);

