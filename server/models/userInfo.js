import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userName: String,
    userID: String,
    userImage: String,
    userEmail: String,
});

const UserInfo = mongoose.model('UserInfo', userSchema)

export default UserInfo