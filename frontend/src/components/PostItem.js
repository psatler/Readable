import React from 'react'
// import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Item, Icon, Label }from 'semantic-ui-react'
import { showTime } from '../utils/helpers'
import  PostVote  from './PostVote'
import PostDelete from './PostDelete'



// export const PostItem = ({props}, isDetail) => {
export const PostItem = (props) => {
    const titleWithLink = props.isDetail ? (<div className="postTitle">{props.title}</div>) : //if it is in the post details page, do not exhibit title as a link
        (<Link to={`/${props.category}/${props.id}`}>
            {props.title}
        </Link>);

    return (
        <Item>
            <Item.Content>
                <Item.Header >
                    {titleWithLink}
                    {/* <Link to={`/${props.category}/${props.id}`}>
                        {props.title}
                    </Link>         */}
                </Item.Header>
                
                <Item.Meta><Icon name="time" /> Submitted by <strong>{props.author}</strong>  
                    {` ${showTime(props.timestamp)} `} 
                    to 
                    <strong>{` ${props.category} `}</strong> 
                </Item.Meta>
                
                {/*If body is not passed as prop, it won't be displayed in the screen */}
                {props.isDetail && <Item.Description className="postBody"> {props.body} </Item.Description>}
                

                <Item.Extra>
                    <PostVote id={props.id} voteScore={props.voteScore} />
                    

                   {!props.isDetail && 
                        <Label size='small' basic color='black' >{props.commentCount} comments</Label>  
                   }
                 
                {/* <Label size='mini' basic color='black' >{props.commentCount} comments</Label>   */}
                   

                    <Link to={`/${props.category}/${props.id}/edit`}>
                        <Label size='small' basic color='black'
                            className="postEdit"
                        > Edit </Label>
                    </Link>
                    

                    <PostDelete id={props.id} />

                    {/* <Label as='a' size='mini' basic color='black' onClick={()=> {console.log('Delete')}}> Delete </Label> */}
                    
                </Item.Extra>
                
            </Item.Content>
        </Item>

    )
}


// export default connect(null, {fetchPostDetail})(PostItem);

