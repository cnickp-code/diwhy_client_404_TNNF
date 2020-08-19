import config from '../config';
import TokenService from '../Services/token-service';

const PostingsApiService = {
    // not needed
    getPostingById(id) {
        return (
            {
                id: 1,
                title: 'Help! I lost my refrigerator',
                user_id: 1,
                category: 'Woodworking',
                date_created: new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        )
    },
    postApplicant(posting_id, content, applicant_id) {
        const postApplication = {
            posting_id,
            content,
            applicant_id
        }
        return fetch(`${config.API_ENDPOINT}/applicants`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(postApplication)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getApplicationsByPosting(posting_id) {
        return fetch(`${config.API_ENDPOINT}/applicants/postings/${posting_id}`, {
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
    }
}

export default PostingsApiService;