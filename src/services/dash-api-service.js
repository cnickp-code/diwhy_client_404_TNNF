import config from '../config';
import TokenService from '../Services/token-service';

const DashApiService = {
    getUserInterests(user_id) {
        return fetch(`${config.API_ENDPOINT}/api/interests`, {
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

    },

    postThread() {

    },

    getComments() {

    },

    postComment() {

    }
}