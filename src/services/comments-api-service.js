import config from '../config';
import TokenService from '../Services/token-service';

const CommentsApiService = {

     getComments() {
          console.log('get threads ran')
        return [
            {
                id: 1,
                user_id: 1,
                content: 'Great job man',
                date_created: new Date(),
                thread_id: 1
            },
            {
                id: 2,
                user_id: 2,
                content: 'man job Great',
                date_created: new Date(),
                thread_id: 1
            },
            {
                id: 3,
                user_id: 3,
                content: 'HTML Rulez D00d',              
                date_created: new Date(),
                thread_id: 2
            },
        ]
     },

     postComment() {

     }
}

export default CommentsApiService;