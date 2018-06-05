import { combineReducers } from 'redux'
// import { FETCH_ALL_POSTS } from '../actions/types'
import {FETCH_ALL_POSTS, 
        GET_ALL_CATEGORIES, 
        ADD_NEW_POST,
        GET_POST_DETAIL
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

