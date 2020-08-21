import config from '../config';
import TokenService from './token-service'

const InterestsApiService = {
    getInterestsByUserName(user_name) {
        return fetch(`${config.API_ENDPOINT}/interests/user/${user_name}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postInterest(newItem) {
        return fetch(`${config.API_ENDPOINT}/interests`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
           },
           body: JSON.stringify(newItem)
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    deleteInterestById(id) {

    }
}

export default InterestsApiService;