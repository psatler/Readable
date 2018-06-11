import React from 'react'
// import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Item, Icon, Label }from 'semantic-ui-react'
import { showTime } from '../utils/helpers'
import  PostVote  from './PostVote'
import PostDelete from './PostDelete'

import marked from 'marked'; //to be able to convert from markdown


export const PostItem = (props) => {
    const titleWithLink = props.isDetail ? (<div className="postTitle">{props.title}</div>) : //if it is in the post details page, do not exhibit title as a link
        (<Link to={`/${props.category}/${props.id}`}>
            {props.title}
        </Link>);

    //https://stackoverflow.com/questions/34686523/using-marked-in-react
    const rawMarkup = marked(props.body, {sanitize: true}); 
    

    return (
        <Item>
            <Item.Content>
                <Item.Header >
                    {titleWithLink}
                </Item.Header>
                
                <Item.Meta><Icon name="time" /> Submitted by <strong>{props.author}</strong>  
                    {` ${showTime(props.timestamp)} `} 
                    to 
                    <strong>{` ${props.category} `}</strong> 
                </Item.Meta>
                
                {/*If body is not passed as prop, it won't be displayed in the screen */}
                {props.isDetail && 
                    <Item.Description className="postBody"> 
                        <div dangerouslySetInnerHTML={{ __html: rawMarkup }} />
                        {/* {props.body}  */}
                    </Item.Description>}
                

                <Item.Extra>
                    <PostVote id={props.id} voteScore={props.voteScore} />
                    

                   {!props.isDetail && 
                        <Label size='small' basic color='black' >{props.commentCount} comments</Label>  
                   }

                    <Link to={`/${props.category}/${props.id}/edit`}>
                        <Label size='small' basic color='black'
                            className="postEdit"
                        > Edit </Label>
                    </Link>
                    

                    <PostDelete id={props.id} />
    
                </Item.Extra>
                
            </Item.Content>
        </Item>

    )
}


// export default connect(null, {fetchPostDetail})(PostItem);

