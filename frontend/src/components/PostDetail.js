import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import { PostItem } from './PostItem'

//redux
import { connect } from 'react-redux'
import { fetchPostDetail } from '../actions'



class PostDetail extends Component {

    // handleChange = (e, { name, value }) => {}
    // handleSubmit = () => {}

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchPostDetail(id);
        console.log('id',this.props.match);
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

    render() {
        const { post } = this.props
        console.log('post', post)

        return (

            <div>
                {this.displayPost()}    


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



export default connect(mapStateToPros, {fetchPostDetail})(PostDetail);