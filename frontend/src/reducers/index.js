import { combineReducers } from 'redux'
import { FETCH_ALL_POSTS } from '../actions/types'
import {GET_ALL_CATEGORIES, ADD_NEW_POST} from '../actions'


const initialState = {
    posts: [],
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
                posts: state.posts.push(newPost), //just pushing the newly created post into old array of posts
            };

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

