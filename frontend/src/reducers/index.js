import { combineReducers } from 'redux'
// import { FETCH_ALL_POSTS } from '../actions/types'
import {FETCH_ALL_POSTS, 
        GET_ALL_CATEGORIES, 
        ADD_NEW_POST,
        GET_POST_DETAIL,
        VOTE_ON_POST
        } from '../actions'


const initialState = {
    posts: [],
    // post: [],
    post: {},
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ALL_POSTS:
            // console.log('Inside reducer');
            return {
                ...state,
                posts: action.payload
            };

        case ADD_NEW_POST:
            const newPost = action.payload;
            return {
                // ...state,
                posts: state.posts.concat(newPost), //contatenating the newly created post into old array of posts
            };
        
        case GET_POST_DETAIL:
            return {
                ...state,
                // post: [action.payload], //in this case will be a single post detail
                post: action.payload, //in this case will be a single post detail
            }

        case VOTE_ON_POST:
            const votedPost = action.payload
            const updatedPostID = action.payload.id;

            //code inspired by https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
            const postsUpdated = state.posts.map( post => {
                if(post.id === updatedPostID ) { //the one we looking for
                    return votedPost
                }
                return post; //the one we don't care about at the moment
            })

            return {
                posts: postsUpdated,
                post: votedPost
            }


        default:
            return state;
    }
}



/**
 * CATEGORY REDUCER
 */

const catRed_InitState = {
    categories: [],   
}

const categoryReducer = (state = catRed_InitState, action) => {
    switch(action.type){
        case GET_ALL_CATEGORIES:
            // console.log('testdas')
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}


export default combineReducers({
    categoryReducer,
    postReducer,
})

