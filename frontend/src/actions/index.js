import { FETCH_ALL_POSTS } from './types'
import * as API from '../utils/api'

// export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';

/**
 * action creators
 */
export const getPosts = (posts) => {
    return {
        type: FETCH_ALL_POSTS,
        payload: posts
    }
}

export const fetchAllPosts = () => dispatch => {
    // console.log('fetching!');
    API.getAllPosts()
        .then( posts => dispatch(getPosts(posts)))
}

