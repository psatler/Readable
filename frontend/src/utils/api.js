const api = "http://localhost:3001"

const token = 'whatever-you-want'

const headers = {
    'Accept': 'application/json',
    'Authorization': token
  }


export const getAllCategories = () => 
    fetch(`${api}/categories`, { headers })
        .then( res => res.json())
        .then( data => data.categories)


export const getPostsByCategory = (categoryId) =>
    fetch(`${api}/${categoryId}/posts`, { headers })
        .then(res => res.json())
        // .then(data => data)




