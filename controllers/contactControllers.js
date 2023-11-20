import asyncHandler from 'express-async-handler';
import { contactModel } from '../models/contactModel.js';
//Get all the contacts
const getAllContacts = asyncHandler( async (req, res) => {
    const contact = await contactModel.find();
    res.status(200).json(contact);
});

//Get specific contact

const getContact = asyncHandler( async (req, res) => {
    const contact = await contactModel.findById(req.params.id);
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
        phone
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

    const deletedContact = await contactModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message: `Successfull`})
});




export { getAllContacts, getContact, createContact, updateContact, deleteContact};