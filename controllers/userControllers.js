import asyncHandler from 'express-async-handler';
import { userModel } from '../models/userModel.js';
import bcrypt from 'bcrypt';

//routes from registering the user
const registerUser = asyncHandler( async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are required");
    }

    const isUserAvailable = await userModel.findOne({email});

    if(isUserAvailable){
        res.status(400);
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    });

    if(user){
        res.status(201).json({
            _id: user.id,
             username: user.username, 
            email: user.email,})
    }
    else{
        res.status(400);
        throw new Error("User not valid");
    }

    
});

const loginUser = asyncHandler( async (req, res) => {
    res.status(200).json({message: "Login Success!!"})
}); 

export { registerUser, loginUser };