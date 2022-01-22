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

export const updateProjectComponentDetails = async (req, res) => {
    const _id = req.params.id;
    const componentId = req.body.params.componentId
    const project = req.body.params.updatedProjectComponentDetails;
    console.log(req.params.id)

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No project with that id')
    try {
        const updatedProjectComponentsDetails = await Project.findOneAndUpdate({_id: _id, "projectComponents._id": componentId }, {$set: {
            "projectComponents.$.componentBody": project.componentBody,
            "projectComponents.$.lastUpdated": project.lastUpdated,
            "projectComponents.$.lastUpdatedUser": project.lastUpdatedUser,
            "projectComponents.$.componentName": project.componentName
        }}, {new: true})
        // console.log(updatedPostComment)
        res.json(updatedProjectComponentsDetails);
    } catch (error) {
        console.log(error)
    }
}

export const deleteProjectComponent = async (req, res) => {
    const _id = req.params.id;
    const componentId = req.body.componentId
    // console.log(req.body.componentId)

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Component with that id')
    try {
        await Project.updateMany({id: _id}, {$pull: {'projectComponents': {"_id": componentId}}}, {new: true})
        console.log('deleted')
    } catch (error) {
        console.log(error)
    }
    res.json({message: 'project deleted successfully'})
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No project with that id')

    await Project.findByIdAndRemove(id)

    res.json({message: 'project deleted successfully'})
}