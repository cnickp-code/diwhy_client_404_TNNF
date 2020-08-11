import config from '../config';
// import TokenService from '../Services/token-service';

const ThreadsApiService = {
     getThreads() {
          return [
               {
                    id: 1,
                    title: 'title 1',
                    user_id: 1,
                    category: 'Woodworking',
                    date_created: new Date(),
                    content: 'Hello World 1'
               },
               {
                    id: 2,
                    title: 'title 2',
                    user_id: 1,
                    category: 'Metalworking',
                    date_created: new Date(),
                    content: 'Hello World 2'
               },
               {
                    id: 3,
                    title: 'title 3',
                    user_id: 1,
                    category: 'Sewing',
                    date_created: new Date(),
                    content: 'Hello World 3'
               },
          ]
     },

     postThread() {

     },

     deleteThread() {

     },
}

export default ThreadsApiService