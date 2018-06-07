import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

//redux
import { connect } from 'react-redux';
import { fetchPostDetail, editPostThunk } from '../actions'

class PostEdit extends Component {

    //local state
    state = {
        title: '',
        body: '',
        author: '',
        category: '',
        isLoading: true,
    }

    componentDidMount(){
        //load original post data
        const id = this.props.match.params.id;
        this.props.fetchPostDetail(id)
        const post = this.props.post; //props.post was mapped below
        
        this.setState(
            //using the "?" below to avoid warnings complaining about changing from uncontrolled to controlled components (and vice-versa) after a page refresh
            { 
                isLoading: false,
                title: post.title ? post.title : ' ',
                body: post.body ? post.body : ' ',
                category: post.category ? post.category : ' ',
                author: post.author ? post.author : ' '
            })
    }

    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps', nextProps);
        if(nextProps){
            this.setState({
                title: nextProps.post.title ? nextProps.post.title : ' ',
                body: nextProps.post.body ? nextProps.post.body : ' ',
                category: nextProps.post.category ? nextProps.post.category : ' ' ,
                author: nextProps.post.author ? nextProps.post.author : ' ',
            })
        }
    }

    handleSubmit = () => {
        //update post
        const postID = this.props.match.params.id;
        const {title, body} = this.state;
    
        this.props.editPostThunk(postID, title, body);
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        const {title, body, author, category} = this.state;

        return (
            <div>
                <h1> Edit Post </h1>
                
                {!this.state.isLoading && 
                
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input required placeholder='Insert the post title' name='title' value={title} 
                        onChange={this.handleChange} />
                    <Form.TextArea required placeholder='Insert the post message' name='body' value={body} 
                    onChange={this.handleChange} />
                    <Form.Input disabled name='category' value={category} />
                    <Form.Input disabled name='author' value={author} />
                    <Form.Button content='Submit changes' />
                </Form>
                }

            </div>
        )
    }
}

const mapStateToPros = (state) => ({
    post: state.postReducer.post
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetail: (id) => dispatch(fetchPostDetail(id)),
        editPostThunk: (postID, title, body) => dispatch(editPostThunk(postID, title, body)),
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(PostEdit);
