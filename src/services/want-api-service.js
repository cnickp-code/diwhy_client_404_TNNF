import config from '../config';
import TokenService from '../Services/token-service';

const WantedApiService = {
    // Need to replace hard coded with fetch to the server
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
            )
            .then(posting =>
                console.log(posting)
            )
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
            )
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

        // .then(posting => 
        //     console.log(posting)
        // )
    },
    getWanted() {
        console.log('get postings ran')
        return [
            {
                id: 1,
                title: 'title 1',
                user_id: 1,
                category_id: 1,
                date_created: new Date(),
                content: 'Claw Hammer or Ball-Peen Hammer? Oh and I need help building a shelf.'
            },
            {
                id: 2,
                title: 'title 2',
                user_id: 1,
                category_id: 2,
                date_created: new Date(),
                content: '20 Bucks, 1 hour... you, me, and a room full of wood.'
            },
            {
                id: 3,
                title: 'title 3',
                user_id: 1,
                category_id: 3,
                date_created: new Date(),
                content: 'Please help me organize all these wires! I am losing my mind!'
            },
            {
                id: 4,
                title: 'title 1',
                user_id: 1,
                category_id: 4,
                date_created: new Date(),
                content: 'I would like to paint my kitchen, but I just do not have the confidence...'
            },

        ]
    }
}

export default WantedApiService