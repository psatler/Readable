import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Item, Button, Icon, Label }from 'semantic-ui-react'
import { showTime } from '../utils/helpers'



// export const PostItem = ({props}, isDetail) => {
export const PostItem = (props) => {
    return (
        <Item>
            <Item.Content>
                <Item.Header onClick={() => console.log(props.id) } >
                    <Link to={`/${props.category}/${props.id}`}>
                        {props.title}
                    </Link>        
                </Item.Header>
                
                <Item.Meta><Icon name="time" /> Submitted by <strong>{props.author}</strong>  
                    {`${showTime(props.timestamp)} `} 
                    to 
                    <strong>{` ${props.category} `}</strong> 
                </Item.Meta>
                
                {/*If body is not passed as prop, it won't be displayed in the screen */}
                <Item.Description> {props.body} </Item.Description>

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

