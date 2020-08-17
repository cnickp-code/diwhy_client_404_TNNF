import config from '../config';
import TokenService from '../Services/token-service';

const CommentsApiService = {

    getCommentsByThreadId(threadId) {
        return fetch(`${config.API_ENDPOINT}/comments/thread/${threadId}`, {
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

    postComment(newComment) {
        return fetch(`${config.API_ENDPOINT}/comments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newComment)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    deleteComment(id, callback) {
        return fetch(`${config.API_ENDPOINT}/comments/${id}`, {
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
            callback(id)
        })

    }
}

export default CommentsApiService;