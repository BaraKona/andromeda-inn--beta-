export default (users = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_USERS':
            return action.payload;
        case 'CREATE_USER':
            return [...users, action.payload];
        // case 'DELETE':
        //     return posts.filter((post) => post._id !== action.payload);
        case 'UPDATE_USER':
            return users.map((user) => user._id === action.payload._id ? action.payload : user);
        default:
            return users;
    }
}