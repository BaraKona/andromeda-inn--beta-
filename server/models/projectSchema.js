import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    projectName: String,
    projectCreator: String,
    projectCollaborators: [String],
    projectSummary: String,
    projectGenre: [String],
    projectType: [String],
    selectedFile: String,
    projectComponents: [{
        componentName: String,
        componentCreator: String,
        componentPosition: Number,
        componentBody: String,
        createdAt: Date,
        lastUpdated: Date,
        componentProgress: String,
        componentImage: String
    }],
    createdAt: {
        user: String,
        date: Date
    },
    lastUpdated: {
        user: String,
        date: Date
    }
});

const Project = mongoose.model('Project', projectSchema)

export default Project