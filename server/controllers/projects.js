import  mongoose  from 'mongoose';
import Project from '../models/projectSchema.js'

export const getProjects = async (req, res) => {
    try{
        const project = await Project.find().sort({createdAt: -1}).limit(100);
        res.status(200).json(project)
    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const createProject = async (req, res) => {
    const project = req.body;

    const newProject = new Project(project);
    try {
        await newProject.save();

        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error})
    }
}

export const updateProject = async (req, res) => {
    const { id: _id } = req.params;
    const project = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No project with that id')

    const updatedProject = await Project.findByIdAndUpdate(_id, { ...project, _id}, {new: true})

    res.json(updatedProject);
}

export const updateProjectComponent = async (req, res) => {
    const { id: _id } = req.params;
    const project = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No project with that id')

    try {
        const updatedProjectComponents = await Project.findByIdAndUpdate(_id, {$push: {projectComponents: project}}, {new: true})
        // console.log(updatedPostComment)
        res.json(updatedProjectComponents);
    } catch (error) {
        console.log(error)
    }
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No project with that id')

    await Project.findByIdAndRemove(id)

    res.json({message: 'project deleted successfully'})
}