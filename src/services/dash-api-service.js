import config from '../config';
import TokenService from '../Services/token-service';

const DashApiService = {
    getUserInterests(user_id) {
        return fetch(`${config.API_ENDPOINT}/interests`, {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getThreads() {
        console.log('get threads ran')
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

    getThreadsWatch(user_id) {
        return fetch(`${config.API_ENDPOINT}/threads/${user_id}`, {

        })
    },

    postThread() {

    },

    getComments() {

    },

    postComment() {

    }
}

export default DashApiService