import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Popup } from 'semantic-ui-react'
import uuidv4 from 'uuid/v4'

//redux
import { connect } from 'react-redux'
import { addCommentThunk  } from '../actions'



class CommentForm extends Component {

    /**
        PARAMS:
        id: Any unique ID. As with posts, UUID is probably the best here.
        timestamp: timestamp. Get this however you want.
        body: String
        author: String
        parentId: Should match a post id in the database.
     */

    state = {
        author: '',
        body: '',
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { author, body } = this.state;
        const parentId = this.props.parentId;

        const newComment = {
            id: uuidv4(), //random id
            timestamp: Date.now(),
            body: body,
            author: author, 
            parentId: parentId,
        }

        this.props.addCommentThunk(newComment);

        this.setState({
            author: '',
            body: '',
        })

        //add here a pop up or something saying the post was added! and then clear the form

    
    }

    render() {
        const { author, body } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input required placeholder='Insert your name' name='author' value={author} 
                    onChange={this.handleChange} />

                <Popup 
                        trigger={
                            <Form.TextArea required placeholder='Insert comment' name='body' value={body} 
                        onChange={this.handleChange} />}

                        content="It accepts markdown"
                        on="focus"
                    />

                {/* <Form.TextArea required placeholder='Insert comment' name='body' value={body} 
                   onChange={this.handleChange} /> */}

                <Form.Button content='Add Comment' labelPosition='left' icon='edit' primary />
            </Form>
        )
    }
}

CommentForm.propTypes = {
    addCommentThunk: PropTypes.func.isRequired,
    parentId: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCommentThunk: (newComment) => dispatch(addCommentThunk(newComment)),
    }
}

// const mapStateToProps = (state) => ({

// })

export default connect(null, mapDispatchToProps)(CommentForm);
