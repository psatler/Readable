import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import uuidv4 from 'uuid/v4'
// import { Redirect } from 'react-router-dom'

//redux
import { connect } from 'react-redux'
import { fetchCategories, addNewPost } from '../actions'

class PostForm extends Component {
    /**
     * PARAMS:
        id - UUID should be fine, but any unique id will work
        timestamp - timestamp in whatever format you like, you can use Date.now() if you like
        title - String
        body - String
        author - String
        category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
     */

    //local state
    state = {
        title: '',
        body: '',
        author: '',
        category: '',
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const {title, body, author, category} = this.state;
        const newPost = {
            id: uuidv4(), //random id
            timestamp: Date.now(),
            title: title,
            body: body,
            author: author, 
            category: category,
        }
        this.props.addNewPost(newPost);
        
        //clearing the form
        this.setState({
            title: '',
            body: '',
            author: '',
            category: '',
        })

        //add here a pop up or something saying the post was added! and then clear the form
        //set up a timeout to show message

        // <Redirect to='/' />
        this.props.history.push('/')

    }   

    render() {
        const {title, body, author, category} = this.state;
        const {categories, loading} = this.props; //categories fetched from the server

        if(loading){
            return <h1>Loading form</h1>
        }
        
        //the code below is intended to organize the data as the Dropdown component of Semantic-UI requires
        const options = []
        categories.map( option => {
            const aux = {}
            aux.key =  option.name;
            aux.value = option.name;
            aux.text = option.name;
            return options.push(aux);
        })
        
        // console.log('options', options)

        return (
            <div>

            
            <h1>Create a new post:</h1>    

            <Form onSubmit={this.handleSubmit}>
                <Form.Input required placeholder='Insert the post title' name='title' value={title} 
                    onChange={this.handleChange} />
                <Form.TextArea required placeholder='Insert the post message' name='body' value={body} 
                   onChange={this.handleChange} />
                <Form.Dropdown fluid selection placeholder='Select a category' options={options} 
                    name='category' value={category} onChange={this.handleChange}
                    />
                <Form.Input required placeholder='Author name' name='author' value={author} 
                    onChange={this.handleChange} />
                <Form.Button basic color="black" content='Submit Post' />
            </Form>
            </div>
        )
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        addNewPost: (newPost) => dispatch(addNewPost(newPost))
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoryReducer.categories,
        loading: state.postReducer.loading,
    }
}

PostForm.propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    addNewPost: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);