const api = "http://localhost:3001"

const token = 'whatever-you-want23'

const headers = {
    'Accept': 'application/json',
    'Authorization': token
  }


export const getAllCategories = () => 
    fetch(`${api}/categories`, { headers })
        .then( res => res.json())
        .then( data => data.categories)


// export const getPostsFromCategory = () =>
//     fetch(``)
