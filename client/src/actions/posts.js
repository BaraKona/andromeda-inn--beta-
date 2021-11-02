import * as api  from '../api';

//Create actions || action creators are functions that return actions

//This method fetches all the posts from the database.
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        data.reverse()
        console.log(data)
        dispatch({type: 'FETCH_ALL', payload: data})
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
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch ({ type: 'UPDATE', payload: data });
    } catch(error) {
        console.log(error.message)
    }
}