export default (projects = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_PROJECTS':
            return action.payload;
        case 'CREATE_PROJECT':
            return [...projects, action.payload];
        case 'DELETE_PROJECT':
            return projects.filter((project) => project._id !== action.payload);
        case 'UPDATE_PROJECT':
            return projects.map((user) => user._id === action.payload._id ? action.payload : user);
        case 'UPDATE_PROJECT_COMPONENT':
            return projects.map((project) => project._id === action.payload._id ? action.payload : project);
        case 'UPDATE_PROJECT_COMPONENT_DETAILS':
            return projects.map((project) => project._id === action.payload._id ? action.payload : project);
        case 'DELETE_PROJECT_COMPONENT':
            return projects.filter((project) => project._id !== action.payload);
        default:
            return projects;
    }
}