import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    projectCreator: String,
    projectCollaborators: [String],
    projectSummary: String,
    projectGenre: [String],
    projectType: [String],
    selectedFile: String,
    projectComponents: [{
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