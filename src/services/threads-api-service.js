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
          )
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
               )
          },

          // return [
          //      {
          //           id: 1,
          //           title: 'title 1',
          //           user_id: 1,
          //           user_name: 'BigLarge',
          //           category: 'Woodworking',
          //           date_created: new Date(),
          //           content: 'Hello World 1'
          //      },
          //      {
          //           id: 2,
          //           title: 'title 2',
          //           user_id: 2,
          //           user_name: 'Pop',
          //           category: 'Metalworking',
          //           date_created: new Date(),
          //           content: 'Hello World 2'
          //      },
          //      {
          //           id: 3,
          //           title: 'title 3',
          //           user_id: 3,
          //           user_name: 'Mam',
          //           category: 'Sewing',
          //           date_created: new Date(),
          //           content: 'Hello World 3'
          //      },
          // ]
    

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
          )
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
               if(!res.ok) {
                    throw new Error(res.status)
               }
               callback(threadId)
          })
     },
}

export default ThreadsApiService