import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import { PostItem } from './PostItem'
// import { Redirect } from 'react-router-dom'
import NoMatch from './NoMatch'

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
        // console.log('POsts', post)
        // console.log('postdisplayPost', post)
        // console.log('Vendo o post', Object.keys(post));

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
            // <span> tese</span>
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
        const id = this.props.match.params.id;
        const category = this.props.match.params.category;

        // console.log('Vendo o post', post);
        // console.log('Vendo o post', Object.keys(post));

        //https://tylermcginnis.com/react-router-programmatically-navigate/
        if(Object.keys(post).length === 0 || post.error){
            // return <Redirect from={`/${category}/${id}`} to="/404" />
            return <NoMatch />
        }

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