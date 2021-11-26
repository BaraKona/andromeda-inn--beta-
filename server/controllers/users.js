import  mongoose  from 'mongoose';
import UserInfo from '../models/userInfo.js'

export const getUsers = async (req, res) => {
    try{
        const userInfo = await UserInfo.find();
        res.status(200).json(userInfo)
    } catch (error) {
        res.status(404).json({message: error});
    }
}
export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new UserInfo(user);
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error})
    }
}
export const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id')

    const updatedUser = await UserInfo.findByIdAndUpdate(_id, { ...user, _id}, {new: true})

    res.json(updatedUser);
}