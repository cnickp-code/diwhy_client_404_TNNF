import config from '../config';
// removing this when we have the fetch working
const PostingsApiService = {
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
}

export default PostingsApiService;