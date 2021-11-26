import axios from 'axios'

const postUrl = 'http://localhost:5000/posts';
const userUrl = 'http://localhost:5000/users';

//Posts
export const fetchPosts = () => axios.get(postUrl);
// export const fetchLimit = () => axios.get('http://localhost:5000/posts',{params: {_$limit: 3}});
export const createPost = (newPost) => axios.post(postUrl, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${postUrl}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${postUrl}/${id}`)

//Users
export const fetchUsers = () => axios.get(userUrl);
export const createUser = (newUser) => axios.post(userUrl, newUser);
export const updateUser = (id, updatedUser) => axios.patch(`${userUrl}/${id}`, updatedUser);