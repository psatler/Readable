// import { FETCH_ALL_POSTS } from './types'
import * as API from '../utils/api'


export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const VOTE_ON_POST = 'VOTE_ON_POST';
export const EDIT_POST = 'EDIT_POST';
export const GET_COMMENTS_FROM_POST = 'GET_COMMENTS_FROM_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

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

// -- comments
export const getCommentsFromPostAction = (comments) => {
    return {
        type: GET_COMMENTS_FROM_POST,
        payload: comments
    }
}

export const addCommentAction = (newComment) => {
    return {
        type: ADD_COMMENT,
        payload: newComment,
    }
}

export const voteOnCommentAction = (comment) => {
    return {
        type: VOTE_ON_COMMENT,
        payload: comment,
    }
}

export const editCommentAction = (comment) => {
    return {
        type: EDIT_COMMENT,
        payload: comment,
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
            // console.log('postInsideThunk', post)
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


//comments
export const fetchCommentsFromPostThunk = (postID) => dispatch => {
    API.getCommentsFromPost(postID)
        .then( comments => dispatch(getCommentsFromPostAction(comments)))
}


export const addCommentThunk = (newComment) => dispatch => {
    API.addComment(newComment)
        .then( comment => dispatch(addCommentAction(comment)))
}

export const voteOnCommentThunk = (commentId, option) => dispatch => {
    API.voteOnComment(commentId, option)
        .then( updatedComment => dispatch(voteOnCommentAction(updatedComment)))
}

export const editCommentThunk = (commentId, timestamp, body) => dispatch => {
    API.editComment(commentId, timestamp, body)
        .then( comment => dispatch(editCommentAction(comment)))
}