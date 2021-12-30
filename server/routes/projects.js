import express from 'express';

import { getProjects, createProject, updateProject, deleteProject} from '../controllers/projects.js'

const router = express.Router();

router.get('/', getProjects)
router.post('/', createProject)
router.patch('/:id', updateProject)
// router.patch('/:id', updatePostComment)
router.delete('/:id', deleteProject)

export default router