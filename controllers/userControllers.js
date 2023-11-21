import asyncHandler from 'express-async-handler';
import { userModel } from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    const { email, password } = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("All fields are required");
    }

    const user = await userModel.findOne({ email });

    if(user && await(bcrypt.compare(password, user.password))){
        const accessToken = await jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id,
            }
        },
        process.env.ACCESS_TOKEN,
        {expiresIn: '10m'}
        );
        res.status(200).json({accessToken});
    }
    else{
        res.status(401);
        throw new Error("Invalid credentials")
    }
}); 

const currentUser = asyncHandler ( async (req, res) => {
    res.status(200).json({message: "Success", data: req.user});
});

export { registerUser, loginUser, currentUser };