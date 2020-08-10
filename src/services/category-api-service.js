import config from '../config';
import TokenService from '../Services/token-service';

const CategoryService = {
     
     getCategories() {
          return fetch(`${config.API_ENDPOINT}/categories`, {
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
          return fetch(`${config.API_ENDPOINT}/categories/${id}`, {
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