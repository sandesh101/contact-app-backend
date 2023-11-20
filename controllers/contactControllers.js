import asyncHandler from 'express-async-handler';

//Get all the contacts
const getAllContacts = asyncHandler( async (req, res) => {
    res.status(200).json({message: "Getting all contact!!"})
});

//Get specific contact

const getContact = asyncHandler( async (req, res) => {
    const id = req.params.id;
    res.status(200).json({message: `Done Finding ${id}`})
});


//Create contacts
const createContact = asyncHandler( async(req,res) => {
    const { name, email, phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }
    res.status(200).json({message: "Creating contact!!"})
});

//Update contacts
const updateContact = asyncHandler( async (req, res) => {
    const id = req.params.id;
    res.status(200).json({message: `Updated ${id}!!`})
});

//Delete contact
const deleteContact = asyncHandler( async (req,res) => {
    const id = req.params.id;
    res.status(200).json({message: `Deleted ${id}`})
});




export { getAllContacts, getContact, createContact, updateContact, deleteContact};