import config from '../config';
import TokenService from '../Services/token-service';

const WantedApiService = {
    getById(id) {
        return fetch(`${config.API_ENDPOINT}/postings/${id}`, {
            method: 'GET',
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

    postPosting(posting) {
        return fetch(`${config.API_ENDPOINT}/postings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(posting)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            );
    },

    getAllPostings() {
        return fetch(`${config.API_ENDPOINT}/postings`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
};

export default WantedApiService;