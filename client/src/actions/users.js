import * as api  from '../api';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        console.log(data)
        console.log("data above")
        dispatch({type: 'FETCH_ALL_USERS', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}
//This method fetches 4 posts from the database.
// export const getLimit = () => async (dispatch) => {
//     try {
//         const { data } = await api.fetchLimit();
//         data.reverse()
//         dispatch({type: 'FETCH_FOUR', payload: data})
//         console.log(data)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
//This method creates a post and puts it in the database
export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);
        dispatch({type: 'CREATE_USER', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}
export const updateUser = (id, user) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, user);

        dispatch ({ type: 'UPDATE_USER', payload: data });
    } catch(error) {
        console.log(error.message)
    }
}