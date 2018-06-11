import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom' //using this HOC to be able to redirect back to home after deletion

//redux
import {connect} from 'react-redux';
import { deletePostThunk } from '../actions'

class PostDelete extends Component {

    onDelete = () => {

        console.log('Deletdase')
        const postId = this.props.id;
        this.props.deletePostThunk(postId);

        //show message telling post was deleted

        this.props.history.push('/');
        // console.log('pushed!')
    }
    
    render(){

        return (

            <Label as='a' size='small' basic color='black' onClick={this.onDelete}
                className="postDelete"
            > 
                Delete 
            </Label>
        )
    }

}

PostDelete.propTypes = {
    id: PropTypes.string.isRequired, //from parent component
    deletePostThunk: PropTypes.func.isRequired, //from dispatch
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePostThunk: (id) => dispatch(deletePostThunk(id)),
    }
}

//wrapping the component with withRouter to be able to use history.push
export default connect(null, mapDispatchToProps)(withRouter(PostDelete));