import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    postCreator: String,
    postTitle: String,
    postContent: String,
    postReContent: String,
    postGenre: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage