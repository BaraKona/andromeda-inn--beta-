import * as api  from '../api';

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects();
        console.log(data)
        dispatch({type: 'FETCH_ALL_PROJECTS', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}
export const updateProjectComponent = (id, project) => async (dispatch) => {
    try {
        const { data } = await api.updateProjectComponent(id, project);
        console.log( data )
        dispatch ({ type: 'UPDATE_PROJECT_COMPONENT', payload: data });
        return(data)
    } catch (error) {
        console.log(error.message)
    }
}
export const updateProjectComponentDetails = (id, componentId, project) => async (dispatch) => {
    try {
        const { data } = await api.updateProjectComponentDetails(id, componentId, project);
        console.log( data )
        dispatch ({ type: 'UPDATE_PROJECT_COMPONENT_DETAILS', payload: data });
        return(data)
    } catch (error) {
        console.log(error.message)
    }
}
export const createProject = (user) => async (dispatch) => {
    try {
        const { data } = await api.createProject(user);
        dispatch({type: 'CREATE_PROJECT', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}
export const updateProject = (id, user) => async (dispatch) => {
    try {
        const { data } = await api.updateProject(id, user);

        dispatch ({ type: 'UPDATE_PROJECT', payload: data });
    } catch(error) {
        console.log(error.message)
    }
}
export const deleteProjectComponent = (id, componentId) => async (dispatch) => {
    try {
        const { data } = await api.deleteProjectComponent(id, componentId)
        console.log(data)
        dispatch ({ type: 'DELETE_PROJECT_COMPONENT', payload: data })
        return (data)

    } catch (error) {
        console.log(error.message)
    }
}
export const deleteProject = (id) => async(dispatch) => {
    try {
        await api.deleteProject(id)

        dispatch({ type: 'DELETE_PROJECT', payload: id})
    } catch (error) {
        console.log(error)
    }
}