import config from '../config';

const CategoryService = {
     
     getCategories() {
          return fetch(`${config.API_ENDPOINT}/api/categories`, {
               headers: {
                    'authorization': `bearer ${TokenService.getAuthToken()}`,
               },
          })
               .then(res => 
                    (!res.ok)
                         ? res.json().then(e => Promise.reject(e))
                         : res.json()
               )
     },

     getCategory(id) {
          return fetch(`${config.API_ENDPOINT}/api/categories/${id}`, {
               headers: {
                    'authorization': `bearer ${TokenService.getAuthToken()}`,
               },
          })
               .then(res =>
                    (!res.ok)
                         ? res.json().then(e => Promise.reject(e))
                         : res.json()
               )
     }
}

export default CategoryService;