import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    postCreator: String,
    postTitle: String,
    postContent: String,
    postReContent: String,
    postGenre: String,
    tags: [String],
    selectedFile: String,
    postInterest: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage