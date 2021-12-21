import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    postCreator: String,
    postTitle: String,
    postContent: String,
    postReContent: String,
    postGenre: [String],
    postType: [String],
    postCollab: [String],
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
    postComments: [{
        commenter: String,
        comment: String,
        commentTime: Date,
    }]
});

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage