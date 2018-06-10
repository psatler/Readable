// import { FETCH_ALL_POSTS } from './types'
import * as API from '../utils/api'


export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const VOTE_ON_POST = 'VOTE_ON_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_COMMENTS_FROM_POST = 'GET_COMMENTS_FROM_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const SORT_ITENS = 'SORT_ITENS';

export const FETCH_BEGIN = 'FETCH_BEGIN'
export const FETCH_END = 'FETCH_END'
export const FETCH_BEGIN_COMMENTS = 'FETCH_BEGIN_COMMENTS'
export const FETCH_END_COMMENTS = 'FETCH_END_COMMENTS'

export const CHANGE_ACTIVE_ITEM = 'CHANGE_ACTIVE_ITEM'

/**
 * ############### action creators ###############
 */

export const changeMenuActiveItem = (option) => {
    return {
        type: CHANGE_ACTIVE_ITEM,
        payload: option,
    }
}


//action for the loader
//inspired by https://daveceddia.com/where-fetch-data-redux/
//then adding dispatch(fetchBegin()); before fetch calls at thunks
export const fetchBegin = () => {
    return {
        type: FETCH_BEGIN,
    }
}

export const fetchEnd = () => {
    return {
        type: FETCH_END,
    }
}

export const fetchBeginComments = () => {
    return {
        type: FETCH_BEGIN_COMMENTS,
    }
}

export const fetchEndComments = () => {
    return {
        type: FETCH_END_COMMENTS,
    }
}

export const sortItensAction = (option) => {
    return {
        type: SORT_ITENS,
        payload: option,
    }
}

// ------ categories
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



// ------ posts
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

export const deletePostAction = (deletedPost) => {
    // console.log('deletePostAction', post)
    return {
        type: DELETE_POST,
        payload: deletedPost,
    }
}


// ----- comments
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

export const deleteCommentAction = (deletedComment) => {
    return {
        type: DELETE_COMMENT,
        payload: deletedComment,
    }
}


/**
 * ############### Thunks ###############
 */

// --------- categories
export const fetchCategories = () => dispatch => {
    // console.log('fetching!');
    dispatch(fetchBegin());
    API.getAllCategories()
        .then( categories => {
            // console.log('fetching!', categories);
            dispatch(getCategories(categories))
            dispatch(fetchEnd());
        })
}

export const fetchPostsByCategory = (category) => dispatch => {
    dispatch(fetchBegin());
    API.getPostsByCategory(category)
        .then( posts => {
            dispatch(getPostsByCategoryAction(posts));
            dispatch(fetchEnd());
        })
}

// --------- posts
export const fetchAllPosts = () => dispatch => {
    // console.log('fetching!');
    dispatch(fetchBegin());
    API.getAllPosts()
        .then( posts => {
            dispatch(getPosts(posts))
            dispatch(fetchEnd());
        })
}

export const addNewPost = (newPost) => dispatch => {
    API.addPost(newPost)
        .then( post => {
            dispatch(addNewPostAction(post))
        })
}

export const fetchPostDetail = (postID) => dispatch => {
    dispatch(fetchBegin());
    API.getPostDetail(postID)
        .then(post => {
            // console.log('postInsideThunk', post)
            dispatch(getPostDetailAction(post))
            dispatch(fetchEnd());
        } )
}

export const voteOnPostThunk = (postID, option) => dispatch => {
    API.voteOnPost(postID, option)
        .then( post => dispatch(voteOnPostAction(post)))
}

export const editPostThunk = (postID, title, body) => dispatch => {
    dispatch(fetchBegin());
    API.editPost(postID,title,body)
        .then( post => {
            dispatch(editPostAction(post))
            dispatch(fetchEnd());
        })
}

export const deletePostThunk = (postID) => dispatch => {
    dispatch(fetchBegin());
    API.deletePost(postID)
        .then( deletedPost => {
            dispatch(deletePostAction(deletedPost))
            dispatch(fetchEnd());
        })
}


//--------- comments
export const fetchCommentsFromPostThunk = (postID) => dispatch => {
    dispatch(fetchBeginComments());
    API.getCommentsFromPost(postID)
        .then( comments => {
            dispatch(getCommentsFromPostAction(comments))
            dispatch(fetchEndComments());
        })
}


export const addCommentThunk = (newComment) => dispatch => {
    dispatch(fetchBeginComments());
    API.addComment(newComment)
        .then( comment => {
            dispatch(addCommentAction(comment))
            dispatch(fetchEndComments());
        })
}

export const voteOnCommentThunk = (commentId, option) => dispatch => {
    API.voteOnComment(commentId, option)
        .then( updatedComment => dispatch(voteOnCommentAction(updatedComment)))
}

export const editCommentThunk = (commentId, timestamp, body) => dispatch => {
    API.editComment(commentId, timestamp, body)
        .then( comment => dispatch(editCommentAction(comment)))
}

export const deleteCommentThunk = (commentID) => dispatch => {
    dispatch(fetchBeginComments());
    API.deleteComment(commentID)
        .then( deletedComment => {
            dispatch(deleteCommentAction(deletedComment));
            dispatch(fetchEndComments());
        })
}