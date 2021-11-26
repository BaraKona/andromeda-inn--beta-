export default (users = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...users, action.payload];
        // case 'DELETE':
        //     return posts.filter((post) => post._id !== action.payload);
        case 'UPDATE':
            return users.map((user) => user._id === action.payload._id ? action.payload : user);
        default:
            return users;
    }
}