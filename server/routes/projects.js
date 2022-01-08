import express from 'express';

import { getProjects, createProject, updateProject, deleteProject, updateProjectComponent} from '../controllers/projects.js'

const router = express.Router();

router.get('/', getProjects)
router.post('/', createProject)
router.patch('/:id', updateProject)
router.patch('/:id/component', updateProjectComponent)
router.delete('/:id', deleteProject)

export default router