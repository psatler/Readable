const api = "http://localhost:3001"

const token = 'whatever-you-want'

const headers = {
    'Accept': 'application/json',
    'Authorization': token
  }

/**
 * POSTS
 */

//GET /categories - Get all of the categories available for the app.
export const getAllCategories = () => 
    fetch(`${api}/categories`, { headers })
        .then( res => res.json())
        .then( data => data.categories)

//GET /:category/posts - Get all of the posts for a particular category
export const getPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)

//GET /posts - Get all of the posts. Useful for the main page when no category is selected.
export const getAllPosts = () => 
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)

//POST /posts - Add a new post
export const addPost = (newPost) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-type':'application/json'
        },
        body: JSON.stringify(newPost)
    }).then(res => res.json())

//GET /posts/:id - Get the details of a single post
export const getPostDetail = (postID) => 
    fetch(`${api}/posts/${postID}`, { headers })
        .then(res => res.json())
        .then(data => data)

//POST /posts/:id - Used for voting on a post, option - String: Either "upVote" or "downVote"
export const voteOnPost = (postID, option) =>
    fetch(`${api}/posts/${postID}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            option: option
        })
    }).then(res => res.json())

//PUT /posts/:id - Edit the details of an existing post - PARAMS: title - String and body - String
export const editPost = (postID, title, body) => 
    fetch(`${api}/posts/${postID}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
        })
    }).then(res => res.json())

//DELETE /posts/:id - Sets the deleted flag for a post to 'true'. Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = (postID) =>
    fetch(`${api}/posts/${postID}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-type':'application/json'
        }
    }).then(res => res.json())


/**
 * COMMENTS
 */

//GET /posts/:id/comments - Get all the comments for a single post
export const getCommentsFromPost = (postID) =>
    fetch(`${api}/posts/${postID}/comments`, { headers })
        .then(res => res.json())
        .then(data => data)

//POST /comments - Add a comment to a post
export const addComment = (comment) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-type':'application/json'
        },
        body: JSON.stringify(comment)
    }).then(res => res.json())

//GET /comments/:id - Get the details for a single comment
export const getCommentDetail = (id) => 
    fetch(`${api}/comments/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)

//POST /comments/:id - Used for voting on a comment. option - String: Either "upVote" or "downVote"
export const voteOnComment = (id, option) =>
    fetch(`${api}/comments/${id}`,{
        method: 'POST',
            headers: {
                ...headers,
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                option: option
            })
        }).then(res => res.json())

//PUT /comments/:id - Edit the details of an existing comment
export const editComment = (id, timestamp, body) =>
    fetch(`${api}/comments/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-type':'application/json'
        },
        body: JSON.stringify({timestamp, body})
    }).then(res => res.json())

//DELETE /comments/:id - Sets a comment's deleted flag to 'true'
export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-type':'application/json'
        }
    }).then(res => res.json())

