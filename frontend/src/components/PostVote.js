import React, { Component } from 'react'
import {Icon, Label} from 'semantic-ui-react'
import PropTypes from 'prop-types'

//redux
import {connect} from 'react-redux';
import { voteOnPostThunk } from '../actions'

class PostVote extends Component {

    render(){
        const id = this.props.id;
        
        return (
            <span>
            
            <Icon name='arrow up' 
                className="postVoteUp"
                onClick={()=> {this.props.voteOnPostThunk(id,"upVote")}} />
               
                    <Label circular>{this.props.voteScore}</Label>
            
            <Icon name='arrow down' 
                className="postVoteDown"
                onClick={()=> {this.props.voteOnPostThunk(id,"downVote")}} />
            
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


