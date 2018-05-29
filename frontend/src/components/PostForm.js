import React, { Component } from 'react'


class PostForm extends Component {
    render() {
        return (
        <div>
            <form  onSubmit={ () => {}}>
                <input required type='text' onChange={ () => {}} 
                    placeholder="Insert your Post Title" 
                    
                />
                <br />
                <textarea rows={5} onChange={ () => {}} 
                    placeholder="Enter your comment here" >
                </textarea>
                <br />
                <input required type='text' onChange={ () => {}}
                    placeholder="Author name" />
                <br />
                <select onChange={ () => {}} value="" >
                    <option value="" disabled> Placeholder </option>
                    <option value="" >React</option>
                    <option value="" >Redux</option>
                    <option value="" >Udacity</option>
                </select>
                <br />
                <button>Submit</button>
                <button>Cancel</button>
            </form>
            
        </div>
        )
    }
}

export default PostForm;