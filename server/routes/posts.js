import express from 'express';

import { getPosts, createPost, updatePost, deletePost, updatePostComment} from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.patch('/:id/comment', updatePostComment)
router.delete('/:id/delete-post', deletePost)

export default router