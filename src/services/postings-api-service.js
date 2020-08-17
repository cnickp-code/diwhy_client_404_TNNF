import config from '../config';

const PostingsApiService = {
    getPostingById(id) {
        // fetch(`${config.API_ENDPOINT}/postings/${id}`)
        //      .then(res => {
        //           return (!res.ok)
        //                     ? res.json().then(e => Promise.reject(e))
        //                     : res.json()
        //      })

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
}

export default PostingsApiService;