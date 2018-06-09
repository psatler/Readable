import { combineReducers } from 'redux'
// import { FETCH_ALL_POSTS } from '../actions/types'
import {FETCH_ALL_POSTS, 
        GET_ALL_CATEGORIES,
        GET_POSTS_BY_CATEGORY, 
        ADD_NEW_POST,
        GET_POST_DETAIL,
        VOTE_ON_POST,
        EDIT_POST,
        GET_COMMENTS_FROM_POST,
        ADD_COMMENT,
        VOTE_ON_COMMENT,
        EDIT_COMMENT,
        DELETE_POST,
        DELETE_COMMENT,
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
                ...state,
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
                ...state,
                posts: postsUpdated,
                post: votedPost
            }

        case EDIT_POST:
            // console.log('POST ATUALIZADO', action.payload)
            const editedPost = action.payload; //the post that was updated
            const id = action.payload.id;
            const newPostsArray = state.posts.map( post => {
                if(post.id === id) {
                    return editedPost
                }
                return post;
            })
            return {
                ...state,
                posts: newPostsArray,
                post: editedPost
            }

        case DELETE_POST:
            const deletedPostId = action.payload.id;
            // console.log('deletedPost', deletedPost)
            const newArr = state.posts.filter( post => post.id !== deletedPostId )
            return {
                ...state,
                posts: newArr,

            }

        case GET_POSTS_BY_CATEGORY:
            return {
                ...state,
                posts: action.payload
            }

        default:
            return state;
    }
}


/**
* COMMENT REDUCER  
*/
const commentReducer_InitialState = {
    comments: [],
    comment: {},
}

const commentReducer = (state = commentReducer_InitialState, action) => {
    switch(action.type){
        case GET_COMMENTS_FROM_POST:
            return {
                ...state,
                comments: action.payload,
            }

        case ADD_COMMENT:
            const newComment = action.payload;
            return {
                ...state,
                comments: state.comments.concat(newComment),
            }

        case VOTE_ON_COMMENT:
            const commentVoted = action.payload;
            const commentId = action.payload.id;
            const newCommentsArray = state.comments.map( comment => {
                if(comment.id === commentId){ //if equal, update the comment object
                    return commentVoted;
                }
                //if not, just return the old ones
                return comment;
            })
            return {
                ...state,
                comments: newCommentsArray,
                comment: commentVoted,
            }

        case EDIT_COMMENT:
            const commentEdited = action.payload;
            const commentsArray = state.comments.map( comment => {
                if(comment.id === action.payload.id){ //if equal, update the comment object
                    return commentEdited;
                }
                //if not, just return the old ones
                return comment;
            })
            return {
                ...state,
                comments: commentsArray,
                comment: commentEdited,
            }

        case DELETE_COMMENT:
            const deletedCommentID = action.payload.id;
            const newCommentArr = state.comments.filter( comment => comment.id !== deletedCommentID);
            return {
                ...state,
                comments: newCommentArr,
            }

        default:
            return state;
    }
}



/**
 * CATEGORY REDUCER
 */

const categoryReducer_InitialState = {
    categories: [],   
    postsByCategory: [],   
}

const categoryReducer = (state = categoryReducer_InitialState, action) => {
    switch(action.type){
        case GET_ALL_CATEGORIES:
            // console.log('testdas')
            return {
                ...state,
                categories: action.payload,
            }

        default:
            return state;
    }
}


export default combineReducers({
    categoryReducer,
    postReducer,
    commentReducer,
})

