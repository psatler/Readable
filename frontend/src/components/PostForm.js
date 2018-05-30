import React, { Component } from 'react'


class PostForm extends Component {
    //local state
    state = {
        title: '',
        body: '',
        author: '',
        option: '',

    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.option);
        console.log('name',this.state.name);

    }

    onChange = (e) => {
        e.preventDefault();
        //instead of creating one event handler for each type, grabbing the name and assigning its value
        this.setState({[e.target.name]: e.target.value});
    }

    onChangeSelect = (e) => {
        this.setState({ option: e});
    }



    render() {
        return (
        <div>
            <form  onSubmit={this.onSubmit}>
                <input 
                    required 
                    type='text' 
                    name='title' 
                    onChange={ (e) => this.onChange } 
                    placeholder="Insert your Post Title" 
                />
                <br />
                <textarea 
                    rows={5} 
                    name='body'
                    onChange={ (e) => this.onChange } 
                    placeholder="Enter your post message here"
                >
                </textarea>
                <br />
                <input 
                    required 
                    type='text'
                    name='author' 
                    onChange={ (e) => this.onChange}
                    placeholder="Author name" 
                />
                <br />
                <select 
                    onChange={ (e) => this.onChangeSelect(e.target.value)} 
                    value={this.state.option}
                    name='option' 
                >
                    <option value="" disabled> Placeholder </option>
                    <option value="react" >React</option>
                    <option value="redux" >Redux</option>
                    <option value="udacity" >Udacity</option>
                </select>
                <br />
                <button type="submit">Submit</button>
                {/* <button>Cancel</button> */}
            </form>
            
        </div>
        )
    }
}

export default PostForm;