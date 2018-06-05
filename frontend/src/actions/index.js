// import { FETCH_ALL_POSTS } from './types'
import * as API from '../utils/api'

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const GET_POST_DETAIL = 'GET_POST_DETAIL'

/**
 * ############### action creators ###############
 */

export const getCategories = (categories) => {
    return {
        type: GET_ALL_CATEGORIES,
        payload: categories
    }
}

export const getPosts = (posts) => {
    return {
        type: FETCH_ALL_POSTS,
        payload: posts
    }
}

export const addNewPostAction = (newPost) => {
    return {
        type: ADD_NEW_POST,
        payload: newPost
    }
}

export const getPostDetailAction = (postDetails) => {
    return {
        type: GET_POST_DETAIL,
        payload: postDetails
    }
}

/**
 * ############### Thunks ###############
 */

export const fetchCategories = () => dispatch => {
    // console.log('fetching!');
API.getAllCategories()
    .then( categories => {
        // console.log('fetching!', categories);
        dispatch(getCategories(categories))
    })
}

export const fetchAllPosts = () => dispatch => {
    // console.log('fetching!');
    API.getAllPosts()
        .then( posts => dispatch(getPosts(posts)))
}

export const addNewPost = (newPost) => dispatch => {
    API.addPost(newPost)
        .then( post => {
            dispatch(addNewPostAction(post))
        })
}

export const fetchPostDetail = (postID) => dispatch => {
    API.getPostDetail(postID)
        .then(post => {
            console.log('postInsideThunk', post)
            dispatch(getPostDetailAction(post))
        } )
}