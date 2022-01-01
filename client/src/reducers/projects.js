export default (projects = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_PROJECTS':
            return action.payload;
        case 'CREATE_PROJECT':
            return [...projects, action.payload];
        // case 'DELETE':
        //     return posts.filter((post) => post._id !== action.payload);
        case 'UPDATE_PROJECT':
            return projects.map((user) => user._id === action.payload._id ? action.payload : user);
        default:
            return projects;
    }
}