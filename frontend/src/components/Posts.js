import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Segment, Item, Image, Button, Icon, Label }from 'semantic-ui-react'
/**
 * Redux
 */
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions' //importing an action


const ItemPost = ({props}) => {
    return (
        <Item>
            <Item.Content>
                <Item.Header >{props.title}</Item.Header>
                <Item.Meta><Icon name="time" /> Submitted by {props.author} at {props.timestamp} to {props.category}</Item.Meta>
                {/* <Item.Description>
                    {props.body}
                </Item.Description> */}
                <Item.Extra>
                    
                    <Icon name='arrow up' onClick={()=> {console.log('hduahsduh')}} />
                        <Label circular>{props.voteScore}</Label>
                    <Icon name='arrow down' />

                    <Label size='mini' basic color='black' >{props.commentCount} comments</Label>
                    <Label as='a' size='mini' basic color='black' onClick={()=> {console.log('bosta')}}> Click Here for Details </Label>
                    
                </Item.Extra>
                

            </Item.Content>
        </Item>

    )
}
    

class Posts extends Component {
    componentDidMount(){
        this.props.fetchAllPosts();
    }

    displayPosts = () => {
        const posts = this.props.posts;
        return (
            posts.map( post => ( 
                <ItemPost key={post.id} props={post} />
                )
            )
        )
    }

    render() {
        console.log('posts', this.props.posts)
        return (
            <div>
                <Button floated='right'>Create New Post</Button>
                <Item.Group divided >
                    {this.displayPosts()}
                </Item.Group>
            </div>
            
        )
    }
}


Posts.propTypes = {
    fetchAllPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired, //prop "declared" below
}

const mapStateToPros = (state) => ({
    posts: state.postReducer.posts
  })
  
  // const mapDispatchToProps = (dispatch)

export default connect(mapStateToPros, { fetchAllPosts })(Posts);