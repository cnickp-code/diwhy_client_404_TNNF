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
        return fetch(`${config.API_ENDPOINT}/threads/`)
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