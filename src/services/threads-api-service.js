import config from '../config';
import TokenService from '../Services/token-service';

const ThreadsApiService = {

     getThreads() {
          return fetch(`${config.API_ENDPOINT}/threads`, {
               headers: {
                    'Authorization': `bearer ${TokenService.getAuthToken()}`
               },
          })
               .then(res =>
                    (!res.ok)
                         ? res.json().then(e => Promise.reject(e))
                         : res.json()
               );
     },

     getThreadById(id) {
          return fetch(`${config.API_ENDPOINT}/threads/${id}`, {
               headers: {
                    'content-type': 'application/json',
                    'Authorization': `bearer ${TokenService.getAuthToken()}`
               },
          })
               .then(res =>
                    (!res.ok)
                         ? res.json().then(e => Promise.reject(e))
                         : res.json()
               );
     },

     getThreadByCategoryId(categoryId) {
          return fetch(`${config.API_ENDPOINT}/category/${categoryId}`, {
               headers: {
                    'content-type': 'application/json',
                    'Authorization': `bearer ${TokenService.getAuthToken()}`
               }
          })
               .then(res =>
                    (!res.ok)
                         ? res.json().then(e => Promise.reject(e))
                         : res.json()
               );
     },

     postThread(thread) {
          return fetch(`${config.API_ENDPOINT}/threads`, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json',
                    'Authorization': `bearer ${TokenService.getAuthToken()}`
               },
               body: JSON.stringify(thread)
          })
               .then(res =>
                    (!res.ok)
                         ? res.json().then(e => Promise.reject(e))
                         : res.json()
               );
     },

     deleteThread(threadId, callback) {
          return fetch(`${config.API_ENDPOINT}/thread/${threadId}`, {
               method: 'DELETE',
               headers: {
                    'content-type': 'application/json',
                    'Authorization': `bearer ${TokenService.getAuthToken()}`
               },
          })
               .then(res => {
                    if (!res.ok) {
                         throw new Error(res.status)
                    }
                    callback(threadId)
               });
     },
     getLikesByThreadId(threadId) {
          return fetch(`${config.API_ENDPOINT}/likes/thread/${threadId}`, {
               headers: {
                    'content-type': 'application/json',
                    'Authorization': `bearer ${TokenService.getAuthToken()}`
               },
          })
               .then(res =>
                    (!res.ok)
                         ? res.json().then(e => Promise.reject(e))
                         : res.json()
               );
     },
     postLikeByThreadId(newLike) {
          return fetch(`${config.API_ENDPOINT}/likes`, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json',
                    'Authorization': `bearer ${TokenService.getAuthToken()}`
               },
               body: JSON.stringify(newLike)
          })
               .then(res =>
                    (!res.ok)
                         ? res.json().then(e => Promise.reject(e))
                         : res.json()
               );
     },
     deleteLikeByThreadId(threadId) {
          return fetch(`${config.API_ENDPOINT}/likes/thread/${threadId}`, {
               method: 'DELETE',
               headers: {
                    'content-type': 'application/json',
                    'Authorization': `bearer ${TokenService.getAuthToken()}`
               },
          })
               .then(res => {
                    if (!res.ok) {
                         throw new Error(res.status)
                    }
                    // callback(threadId)
               });
     },
};

export default ThreadsApiService