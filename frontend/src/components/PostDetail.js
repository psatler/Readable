import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dimmer, Loader } from 'semantic-ui-react'
import { PostItem } from './PostItem'
import NoMatch from './NoMatch'

import Comments from './Comments'

//redux
import { connect } from 'react-redux'
import { fetchPostDetail } from '../actions'



class PostDetail extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchPostDetail(id);
    }


    displayPost = () => {
        const post = this.props.post;

        return (
            // post.hasOwnProperty('id') && //avoiding errors complaints about constructor undefined inside PostItem
            (Object.keys(post).length > 0) && //avoiding errors complaints about constructor undefined inside PostItem
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
        const { post, loading } = this.props

        if(loading){
            return (
                <Dimmer active inverted>
                    <Loader size="large">Loading post details</Loader>
                </Dimmer>
            )
        }

        //https://tylermcginnis.com/react-router-programmatically-navigate/
        //in case the post was deleted, redirects to 404 page
        if(Object.keys(post).length === 0 || post.error){
            // return <Redirect from={`/${category}/${id}`} to="/404" />
            return <NoMatch />
        }

        return (

            <div>
                {this.displayPost()}

                {this.displayComments()}

            </div>
        )
    }
}


const mapStateToPros = (state) => ({
    post: state.postReducer.post,
    loading: state.postReducer.loading,
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetail: (id) => dispatch(fetchPostDetail(id)),
    }
}

PostDetail.propTypes = {
    post: PropTypes.object.isRequired,
    fetchPostDetail: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToPros, mapDispatchToProps)(PostDetail);