import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'



class PostDetail extends Component {

    handleChange = (e, { name, value }) => {}
    handleSubmit = () => {}

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log('id',this.props.match);
    }

    render() {
        return (
            <div>
                <h3>Id: {this.props.match.params.id}</h3>
                <h3>Id: {this.props.match.params.category}</h3>


                <div>
                    <div>Title</div>
                    <div>Title</div>
                </div>

                
                {/* <Child /> */}
                {/* <Form onSubmit={this.handleSubmit}>
                    <Form.Input required placeholder='Insert the post title' name='title' value={title} 
                        onChange={this.handleChange} />
                    <Form.TextArea required placeholder='Insert the post message' name='body' value={body} 
                        onChange={this.handleChange} />
                    <Form.Dropdown fluid selection placeholder='Select Category' options={options} 
                        name='category' value={category} onChange={this.handleChange}
                        />
                    <Form.Input required placeholder='Author name' name='author' value={author} 
                        onChange={this.handleChange} />
                    <Form.Button content='Submit' />
                </Form> */}
            
            </div>
        )
    }
}

export default PostDetail;