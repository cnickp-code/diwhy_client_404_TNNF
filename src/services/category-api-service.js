import config from '../config';
// import TokenService from '../Services/token-service';

const CategoryService = {
     
     getCategories() {
          return fetch(`${config.API_ENDPOINT}/categories`, {
               headers: {
               },
          })
               .then(res => 
                    (!res.ok)
                         ? res.json().then(e => Promise.reject(e))
                         : res.json()
               )
               .then(data => data)
     },

     getCategory(id) {
          return fetch(`${config.API_ENDPOINT}/categories/${id}`, {
               headers: {
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