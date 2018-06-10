import React, { Component } from 'react'
import {Icon, Label} from 'semantic-ui-react'
import PropTypes from 'prop-types'

//redux
import {connect} from 'react-redux';
import { voteOnPostThunk } from '../actions'

class PostVote extends Component {

    render(){
        const id = this.props.id;
        // console.log('postVote', id)
        return (
            <span>
            <a>
            <Icon name='arrow up' onClick={()=> {this.props.voteOnPostThunk(id,"upVote")}} />
            </a>   
                    <Label circular>{this.props.voteScore}</Label>
            <a>
            <Icon name='arrow down' onClick={()=> {this.props.voteOnPostThunk(id,"downVote")}} />
            </a>
            </span>
        )
    }
}

PostVote.propTypes = {
    id: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    voteOnPostThunk: PropTypes.func.isRequired,
}

export default connect(null, {voteOnPostThunk})(PostVote);


