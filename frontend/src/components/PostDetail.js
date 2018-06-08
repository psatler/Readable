import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import { PostItem } from './PostItem'

import Comments from './Comments'

//redux
import { connect } from 'react-redux'
import { fetchPostDetail } from '../actions'



class PostDetail extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchPostDetail(id);
        // console.log('id',this.props.match);

        // this.props.fetchCommentsFromPostThunk(id);

    }

    

    displayPost = () => {
        const post = this.props.post;
        console.log('POsts', post.hasOwnProperty('id'))
        // console.log('postdisplayPost', post)

        return (
            post.hasOwnProperty('id') && //avoiding errors complaints about constructor undefined inside PostItem
            <PostItem 
                    key={post.id} 
                    id={post.id}
                    category={post.category}
                    title={post.title}
                    author={post.author}
                    timestamp={post.timestamp}
                    voteScore={post.voteScore}
                    commentCount={post.commentCount}
                    body={post.body}
                    isDetail={true}
            />
        )
    }

    displayComments = () => {
        const id = this.props.match.params.id;

        return (
            <Comments postID={id} />
        )
    }

    render() {
        const { post } = this.props

        return (

            <div>
                {this.displayPost()}

                {/* <h3>Comments</h3>     */}

                {this.displayComments()}

            </div>
        )
    }
}


PostDetail.propTypes = {
    post: PropTypes.object.isRequired,
    fetchPostDetail: PropTypes.func.isRequired,
}

const mapStateToPros = (state) => ({
    post: state.postReducer.post
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetail: (id) => dispatch(fetchPostDetail(id)),
        // fetchCommentsFromPostThunk: (id) => dispatch(fetchCommentsFromPostThunk(id))
    }
}



export default connect(mapStateToPros, mapDispatchToProps)(PostDetail);