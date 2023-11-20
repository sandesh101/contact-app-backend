import asyncHandler from 'express-async-handler';

//routes from registering the user
const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({message: "Successfully Created User"});
});

const loginUser = asyncHandler( async (req, res) => {
    res.status(200).json({message: "Login Success!!"})
}); 

export { registerUser, loginUser };