import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

//redux
import {connect} from 'react-redux';
import { deletePostThunk } from '../actions'

class PostDelete extends Component {

    onDelete = () => {

        console.log('Deletdase')
        const postId = this.props.id;
        this.props.deletePostThunk(postId);

        //show message telling post was deleted
        
        // const id = this.props.match.params.id;
        // console.log(this.props.match)
        // this.props.history.push('/');
    }
    
    render(){

        return (

            <Label as='a' size='mini' basic color='black' onClick={this.onDelete}> 
                Delete 
            </Label>
        )
    }

}

PostDelete.propTypes = {
    id: PropTypes.string.isRequired,
    deletePostThunk: PropTypes.func.isRequired,
}

const mapDispatchToPros = (dispatch) => {
    return {
        deletePostThunk: (id) => dispatch(deletePostThunk(id)),
    }
}

export default connect(null, mapDispatchToPros)(PostDelete);