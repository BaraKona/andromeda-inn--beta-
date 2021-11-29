import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userID: String,
    userName: String,
    userEmail: String,
    userImage: String,
    userAbout: String,
    userTags: [String],
    userLocation: String,
    userSex: String,
    userDateOfBirth: {
        type: Date,
        default: "01.01.200"
    },
    userLanguages: [String],
    userFriends: [{}]
});

const UserInfo = mongoose.model('UserInfo', userSchema)

export default UserInfo