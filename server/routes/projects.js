import express from 'express';

import { getProjects, createProject, updateProject, deleteProject, updateProjectComponent, updateProjectComponentDetails} from '../controllers/projects.js'

const router = express.Router();

router.get('/', getProjects)
router.post('/', createProject)
router.patch('/:id', updateProject)
router.patch('/:id/component', updateProjectComponent)
router.patch('/:id/component-details', updateProjectComponentDetails)
router.delete('/:id', deleteProject)

export default router