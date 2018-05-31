import { combineReducers } from 'redux'
import { FETCH_ALL_POSTS } from '../actions/types'


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
            }

        default:
            return state;
    }
}


export default combineReducers({
    postReducer,
})

