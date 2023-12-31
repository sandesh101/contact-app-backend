import asyncHandler from 'express-async-handler';
import { contactModel } from '../models/contactModel.js';
//Get all the contacts
const getAllContacts = asyncHandler( async (req, res) => {
    const contact = await contactModel.find({user_id: req.user.id});
    res.status(200).json(contact);
});

//Get specific contact

const getContact = asyncHandler( async (req, res) => {
    const contact = await contactModel.find(req.user.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found!!")
    }
    res.status(200).json({message: "Success", data: contact})
});


//Create contacts
const createContact = asyncHandler( async(req,res) => {
    const { name, email, phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }

    const contact = await contactModel.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json({
        message: "Success", 
        data: contact
    })
});

//Update contacts
const updateContact = asyncHandler( async (req, res) => {
    const contact = await contactModel.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found!!");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission");
    }

    const updatedContact = await contactModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json({message: "Success", data: updatedContact})
});

//Delete contact
const deleteContact = asyncHandler( async (req,res) => {
    const contact = await contactModel.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found!!");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission");
    }

    const deletedContact = await contactModel.deleteOne({ _id: req.params.id });
    res.status(200).json({message: `Successfull`})
});




export { getAllContacts, getContact, createContact, updateContact, deleteContact};