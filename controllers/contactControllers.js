//Get all the contacts
const getAllContacts = (req, res) => {
    res.status(200).json({message: "Getting all contact!!"})
};

//Get specific contact

const getContact = (req, res) => {
    const id = req.params.id;
    res.status(200).json({message: `Done Finding ${id}`})
}


//Create contacts
const createContact = (req,res) => {
    res.status(200).json({message: "Creating contact!!"})
}

//Update contacts
const updateContact = (req, res) => {
    const id = req.params.id;
    res.status(200).json({message: `Updated ${id}!!`})
}

//Delete contact
const deleteContact = (req,res) => {
    const id = req.params.id;
    res.status(200).json({message: `Deleted ${id}`})
}




export { getAllContacts, getContact, createContact, updateContact, deleteContact};