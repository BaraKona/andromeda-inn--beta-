import axios from 'axios'

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const fetchLimit = () => axios.get('http://localhost:5000/posts?_limit=5');
export const createPost = (newPost) => axios.post(url, newPost);
