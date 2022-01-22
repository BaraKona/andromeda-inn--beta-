import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const postUrl = process.env.REACT_APP_POSTS_URL;
const userUrl = process.env.REACT_APP_USER_URL;
const projectUrl = process.env.REACT_APP_PROJECT_URL;
// const postUrl = 'http://localhost:5000/posts';
// const userUrl = 'http://localhost:5000/users';
// const projectUrl = 'http://localhost:5000/projects';

//Posts
export const fetchPosts = () => axios.get(postUrl);
// export const fetchLimit = () => axios.get('http://localhost:5000/posts',{params: {_$limit: 3}});
export const createPost = (newPost) => axios.post(postUrl, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${postUrl}/${id}`, updatedPost);
export const updatePostComment = (id, updatedPostComment) => axios.patch(`${postUrl}/${id}/comment`, updatedPostComment);
export const deletePost = (id) => axios.delete(`${postUrl}/${id}/delete-post`)

//Users
export const fetchUsers = () => axios.get(userUrl);
export const createUser = (newUser) => axios.post(userUrl, newUser);
export const updateUser = (id, updatedUser) => axios.patch(`${userUrl}/${id}`, updatedUser);

//Projects
export const fetchProjects = () => axios.get(projectUrl);
export const createProject = (newProject) => axios.post(projectUrl, newProject);
export const updateProject = (id, updatedProject) => axios.patch(`${projectUrl}/${id}`, updatedProject);
export const updateProjectComponent = (id, updatedProjectComponent) => axios.patch(`${projectUrl}/${id}/component`, updatedProjectComponent);
export const updateProjectComponentDetails = (id, componentId, updatedProjectComponentDetails) => axios.patch(`${projectUrl}/${id}/component-details`, {params: {componentId, updatedProjectComponentDetails}});
export const deleteProject = (id) => axios.delete(`${projectUrl}/${id}`)
export const deleteProjectComponent = (id, componentId) => axios.delete(`${projectUrl}/${id}/delete-component`, {data: {componentId}})



