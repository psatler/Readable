// import { FETCH_ALL_POSTS } from './types'
import * as API from '../utils/api'


export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const VOTE_ON_POST = 'VOTE_ON_POST';
export const EDIT_POST = 'EDIT_POST';

/**
 * ############### action creators ###############
 */

// -- categories
export const getCategories = (categories) => {
    return {
        type: GET_ALL_CATEGORIES,
        payload: categories
    }
}

export const getPostsByCategoryAction = (posts) => {
    return {
        type: GET_POSTS_BY_CATEGORY,
        payload: posts,
    }
}

// -- posts
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

export const voteOnPostAction = (post) => {
    return {
        type: VOTE_ON_POST,
        payload: post
    }
}

export const editPostAction = (post) => {
    return {
        type: EDIT_POST,
        payload: post //updated post
    }
}

/**
 * ############### Thunks ###############
 */

// -- categories
export const fetchCategories = () => dispatch => {
    // console.log('fetching!');
    API.getAllCategories()
        .then( categories => {
            // console.log('fetching!', categories);
            dispatch(getCategories(categories))
        })
}

export const fetchPostsByCategory = (category) => dispatch => {
    API.getPostsByCategory(category)
        .then( posts => {
            dispatch(getPostsByCategoryAction(posts))
        })
}

// -- posts
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

export const voteOnPostThunk = (postID, option) => dispatch => {
    API.voteOnPost(postID, option)
        .then( post => dispatch(voteOnPostAction(post)))
}

export const editPostThunk = (postID, title, body) => dispatch => {
    API.editPost(postID,title,body)
        .then( post => dispatch(editPostAction(post)))
}